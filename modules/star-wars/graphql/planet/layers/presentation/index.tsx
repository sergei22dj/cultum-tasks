import * as React from 'react';
// context
import { PlanetAPIContext } from '@md-sw-planet/layers/api/planet';
// view components
import Image from 'next/image';
import { Info } from '@md-sw/shared/components/info';
import { ContentLoader } from '@md-ui/loaders/content-loader';
// views
import { Name, Wrapper, ImgContainer, InfoContainer, ContentWrapper, DetailsContainer } from '@md-sw/shared/views';

const IMAGE_WIDTH = 600;
const IMAGE_HEIGHT = 600;

const PlanetPresentation = () => {
  const { isLoading, planet, error, planetInfo } = React.useContext(PlanetAPIContext);

  return (
    <ContentWrapper>
      <Wrapper>
        <ContentLoader isLoading={isLoading} error={error}>
          <ImgContainer>
            <Image
              alt='planet'
              layout='responsive'
              placeholder='blur'
              width={IMAGE_WIDTH}
              height={IMAGE_HEIGHT}
              src='/static/images/planet.png'
              blurDataURL='/static/images/planet.png'
            />
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
