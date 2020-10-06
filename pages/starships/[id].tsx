import * as React from 'react';
import { GetStaticPropsContext } from 'next';
import { MainLayout } from '@md-modules/shared/layouts/main';
import { StarshipContainer } from '@md-sw-starship/index';
// query
import { GET_STARSHIP_QUERY } from '@md-sw-starship/queries/starship';
import { GET_STARSHIPS_QUERY } from '@md-queries/starships';
// types
import { GetStarshipResponse, GetStarshipVariables } from '@md-sw-starship/queries/starship/types';
import { GetStarshipsResponse, GetStarshipsVariables } from '@md-queries/starships/types';
//
import { initializeApollo } from '../../lib/apolloClient';

const StarshipPage = () => (
  <MainLayout>
    <StarshipContainer />
  </MainLayout>
);

export async function getStaticPaths() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<GetStarshipsResponse, GetStarshipsVariables>({
    query: GET_STARSHIPS_QUERY
  });

  const paths = data?.starships.map((starship) => ({
    params: { id: starship.id }
  }));

  return { paths: paths ?? [], fallback: false };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const apolloClient = initializeApollo();

  await apolloClient.query<GetStarshipResponse, GetStarshipVariables>({
    variables: { where: { id: params?.id as string } },
    query: GET_STARSHIP_QUERY
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    }
  };
}

export default StarshipPage;
