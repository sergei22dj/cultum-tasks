import * as React from 'react';
// view components
import { Info } from '@md-sw/shared/components/info';
import { ContentLoader } from '@md-ui/loaders/content-loader';
// hooks
import { useSelector } from 'react-redux';
// types
import { RootStore } from '@md-store/index';
// helpers
import { clientError } from '@md-utils/errors';
// views
import { Name, Wrapper, ImgContainer, InfoContainer, ContentWrapper, DetailsContainer } from '@md-sw/shared/views';

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
          <ImgContainer>
            <img src='/static/images/planet.png' alt='planet' />
          </ImgContainer>
          <DetailsContainer>
            {planet && <Name>{planet.properties.name}</Name>}
            <InfoContainer>
              {planetInfo.map((i, idx) => (
                <Info key={idx} {...i} />
              ))}
            </InfoContainer>
          </DetailsContainer>
        </ContentLoader>
      </Wrapper>
    </ContentWrapper>
  );
};

export { PlanetContainer };
