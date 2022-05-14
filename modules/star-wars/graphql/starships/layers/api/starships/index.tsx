import * as React from 'react';
// utils
import * as U from '@md-utils';
// libs
import { useQuery } from '@apollo/client';
// queries
import { GET_STARSHIPS_QUERY } from '@md-queries/starships';
// types
import { Starship } from '@md-shared/types/starship';
import { ClientError } from '@md-utils/errors/custom';
import { GetStarshipsResponse, GetStarshipsVariables, Starships } from '@md-queries/starships/types';


type StarshipItem = Pick<Starship, 'id' | 'name'> & { image: string };

interface Context {
  isLoading: boolean;
  starships: StarshipItem[];
  error?: ClientError<string>;
  refetch: (variables?: GetStarshipsVariables) => Promise<ClientError<string> | Starships>;
  loadMore?: () => Promise<ClientError<string> | Starships>;
}

const StarshipsAPIContext = React.createContext<Context>({
  starships: [],
  isLoading: false,
  refetch: () => Promise.resolve([] as Starships),
  loadMore: () => Promise.resolve([] as Starships)
});

const StarshipsAPIContextProvider: React.FC = ({ children }) => {
  const { data, loading, refetch, error, fetchMore } = useQuery<GetStarshipsResponse, GetStarshipsVariables>(GET_STARSHIPS_QUERY, {
    variables: { first: 5 }
  });

  const refetchStarships = async (variables?: GetStarshipsVariables) => {
    try {
      const result = await refetch(variables);

      return result.data ? result.data.allStarships.starships : [];
    } catch (error: any) {
      return U.errors.parseAndCreateClientError(error);
    }
  };

  const starships = React.useMemo<StarshipItem[]>(
    () =>
      data?.allStarships.starships.map(({ id, name }) => ({
        id,
        name,
        image: '/static/images/starship.jpg'
      })) || [],
    [data?.allStarships.starships]
  );

  const loadMore = async () => {
    try {
      const endCursor = data?.allStarships.pageInfo.endCursor;
      console.log(endCursor)

    const result = await fetchMore({
      variables: { first: 3, after: endCursor},
      updateQuery: (prevResult: any, {fetchMoreResult}: any) => {
        fetchMoreResult.allStarships.starships = [
          ...prevResult.allStarships.starships,
          ...fetchMoreResult.allStarships.starships
        ];

        return fetchMoreResult;
      }
      })


      return result.data ? result.data.allStarships.starships : [];
    }catch(error: any){
      return U.errors.parseAndCreateClientError(error);
    }
  }

  const value = {
    starships,
    loadMore,
    isLoading: loading,
    refetch: refetchStarships,
    error: error ? U.errors.parseAndCreateClientError(error) : undefined,
  }
  return <StarshipsAPIContext.Provider value={value}>{children}</StarshipsAPIContext.Provider>;
};

export { StarshipsAPIContextProvider, StarshipsAPIContext };
