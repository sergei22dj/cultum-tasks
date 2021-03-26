import * as React from 'react';
// view components
import { ContentLoader } from '@md-ui/loaders/content-loader';

import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from 'store';
// views
import {
  ContentWrapper,
  PlanetDetailsContainer,
  PlanetImgContainer,
  PlanetInfoContainer,
  PlanetName,
  Wrapper
} from './views';
import { clientError } from '@md-modules/shared/utils/errors';
import { ThunkDispatch } from '@md-store/helpers';
import * as API from '@md-store/modules/api';
import { PlanetInfo } from './components/planet-info';

interface PlanetInfoProps {
  label: string;
  value: string | number;
}

const PlanetContainer = () => {
  const dispatch = useDispatch<ThunkDispatch>();

  const { data: planet, error, loading } = useSelector<
    RootStore,
    Pick<RootStore['api']['planet'], 'data' | 'error' | 'loading'>
  >((state) => ({
    data: state.api.planet.data,
    error: state.api.planet.error,
    loading: state.api.planet.loading
  }));

  const planetInfo = React.useMemo<PlanetInfoProps[]>(() => {
    if (!planet) {
      return [];
    }

    return [
      { label: 'Diameter', value: planet.diameter ?? 'N/A' },
      { label: 'Gravity', value: planet.gravity ?? 'N/A' },
      { label: 'Orbital Period', value: planet.orbitalPeriod ?? 'N/A' },
      { label: 'Population', value: planet.population ?? 'N/A' }
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeof planet === 'undefined']);

  React.useEffect(() => {
    dispatch(API.planet?.performAPIGetPlanet('6'));
  }, [dispatch]);

  return (
    <ContentWrapper>
      <Wrapper>
        <ContentLoader isLoading={loading} error={clientError(error)}>
          <PlanetImgContainer>
            <img src='/static/images/planet.png' alt='planet' />
          </PlanetImgContainer>
          <PlanetDetailsContainer>
            {planet && <PlanetName>{planet.name}</PlanetName>}
            <PlanetInfoContainer>
              {planetInfo.map((i, idx) => (
                <PlanetInfo key={idx} {...i} />
              ))}
            </PlanetInfoContainer>
          </PlanetDetailsContainer>
        </ContentLoader>
      </Wrapper>
    </ContentWrapper>
  );
};

export { PlanetContainer };
