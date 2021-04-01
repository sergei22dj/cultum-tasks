import * as React from 'react';
// context
import { PlanetAPIContext } from '@md-sw-planet/layers/api/planet';
import { PlanetBLContext } from '@md-sw-planet/layers/business';
// view components
import { Info } from '@md-sw/shared/components/info';
import { ContentLoader } from '@md-ui/loaders/content-loader';
// views
import { Name, Wrapper, ImgContainer, InfoContainer, ContentWrapper, DetailsContainer } from '@md-sw/shared/views';

const PlanetPresentation = () => {
  const { isLoading, planet, error } = React.useContext(PlanetAPIContext);
  const { planetInfo } = React.useContext(PlanetBLContext);

  return (
    <ContentWrapper>
      <Wrapper>
        <ContentLoader isLoading={isLoading} error={error}>
          <ImgContainer>
            <img src='/static/images/planet.png' alt='planet' />
          </ImgContainer>
          <DetailsContainer>
            {planet && <Name>{planet.name}</Name>}
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

export { PlanetPresentation };
