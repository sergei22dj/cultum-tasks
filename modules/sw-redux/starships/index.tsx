import * as React from 'react';
// view components
import { Card } from './compoonents/card';
import { ContentLoader } from '@md-ui/loaders/content-loader';
// views
import { ContentWrapper, Wrapper } from '@md-shared/views/common';
// hooks
import { useDispatch, useSelector } from 'react-redux';
// store
import * as API from '@md-store/modules/api';
// utils
import { clientError } from '@md-shared/services/api';
// types
import { Starship } from '@md-shared/types/starship';
import { RootStore } from '@md-store/index';
import { ThunkDispatch } from '@md-store/helpers';

type ListItem = Pick<Starship, 'id' | 'name'>;

const Starships = () => {
  // hooks
  const dispatch = useDispatch<ThunkDispatch>();

  // store
  const { data, error, loading } = useSelector<
    RootStore,
    Pick<RootStore['api']['starships']['getStarships'], 'data' | 'error' | 'loading'>
  >((state) => ({
    data: state.api.starships.getStarships.data,
    error: state.api.starships.getStarships.error,
    loading: state.api.starships.getStarships.loading
  }));

  // data transformation
  const starshipsList = React.useMemo<ListItem[] | undefined>(
    () =>
      data?.results?.map(({ name, uid }) => ({
        id: uid,
        name
      })),
    [data]
  );

  React.useEffect(() => {
    dispatch(API.starships.getStarships.performAPIGetStarships());
  }, [dispatch]);

  return (
    <ContentWrapper>
      <ContentLoader isLoading={loading} error={clientError(error)}>
        <Wrapper>
          {starshipsList?.map((starship) => (
            <Card key={starship.id} name={starship.name} id={starship.id} />
          ))}
        </Wrapper>
      </ContentLoader>
    </ContentWrapper>
  );
};

export { Starships };
