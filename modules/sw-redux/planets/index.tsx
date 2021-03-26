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
// types
import { Planet } from '@md-shared/types/planet';
import { RootStore } from '@md-store/index';
import { ThunkDispatch } from '@md-store/helpers';
import { clientError } from '@md-shared/services/api';

type ListItem = Pick<Planet, 'id' | 'name'>;

const Planets = () => {
  const dispatch = useDispatch<ThunkDispatch>();

  const { data, error, loading } = useSelector<
    RootStore,
    Pick<RootStore['api']['planets'], 'data' | 'error' | 'loading'>
  >((state) => ({
    data: state.api.planets.data,
    error: state.api.planets.error,
    loading: state.api.planets.loading
  }));

  const planetsList = React.useMemo<ListItem[] | undefined>(
    () =>
      data?.results?.map(({ name, uid }) => ({
        id: uid,
        name
      })),
    [data]
  );

  React.useEffect(() => {
    dispatch(API.planets?.performAPIGetPlanets());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContentWrapper>
      <ContentLoader isLoading={loading} error={clientError(error)}>
        <Wrapper>
          {planetsList?.map((planet) => (
            <Card key={planet.id} name={planet.name} />
          ))}
        </Wrapper>
      </ContentLoader>
    </ContentWrapper>
  );
};

export { Planets };
