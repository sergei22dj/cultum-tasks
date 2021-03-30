import * as React from 'react';
// view components
import { ContentLoader } from '@md-ui/loaders/content-loader';
import { PlanetInfo } from './components/planet-info';
// hooks
import { useSelector } from 'react-redux';
// types
import { RootStore } from 'store';
// helpers
import { clientError } from '@md-modules/shared/utils/errors';
// views
import {
  ContentWrapper,
  PlanetDetailsContainer,
  PlanetImgContainer,
  PlanetInfoContainer,
  PlanetName,
  Wrapper
} from './views';

interface PlanetInfoProps {
  label: string;
  value: string | number;
}

const PlanetContainer = () => {
  // store
  const { data: planet, error, loading } = useSelector<
    RootStore,
    Pick<RootStore['api']['planets']['getPlanet'], 'data' | 'error' | 'loading'>
  >((state) => ({
    data: state.api.planets.getPlanet.data,
    error: state.api.planets.getPlanet.error,
    loading: state.api.planets.getPlanet.loading
  }));

  // data transformation
  const planetInfo = React.useMemo<PlanetInfoProps[]>(() => {
    if (!planet) {
      return [];
    }

    return [
      { label: 'Name', value: planet.properties.name ?? 'N/A' },
      { label: 'Gravity', value: planet.properties.gravity ?? 'N/A' },
      { label: 'Orbital Period', value: planet.properties.orbital_period ?? 'N/A' },
      { label: 'Population', value: planet.properties.population ?? 'N/A' }
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [planet]);

  return (
    <ContentWrapper>
      <Wrapper>
        <ContentLoader isLoading={loading} error={clientError(error)}>
          <PlanetImgContainer>
            <img src='/static/images/planet.png' alt='planet' />
          </PlanetImgContainer>
          <PlanetDetailsContainer>
            {planet && <PlanetName>{planet.properties.name}</PlanetName>}
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
