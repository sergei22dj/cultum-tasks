import * as React from 'react';
// context
import { StarshipAPIContext } from '@md-sw-starship/layers/api/starship';
// view components
import Image from 'next/image';
import { Info } from '@md-sw/shared/components/info';
import { ContentLoader } from '@md-ui/loaders/content-loader';
// views
import { Name, Wrapper, ImgContainer, InfoContainer, ContentWrapper, DetailsContainer } from '@md-sw/shared/views';

const IMAGE_WIDTH = 600;
const IMAGE_HEIGHT = 350;

const StarshipPresentation = () => {
  const { isLoading, starship, error, starshipInfo } = React.useContext(StarshipAPIContext);

  return (
    <ContentWrapper>
      <Wrapper>
        <ContentLoader isLoading={isLoading} error={error}>
          <ImgContainer>
            <Image
              alt='starship'
              layout='responsive'
              placeholder='blur'
              width={IMAGE_WIDTH}
              height={IMAGE_HEIGHT}
              src='/static/images/starship.jpg'
              blurDataURL='/static/images/starship.jpg'
            />
          </ImgContainer>
          <DetailsContainer>
            {starship && <Name>{starship.name}</Name>}
            <InfoContainer>
              {starshipInfo.map((i, idx) => (
                <Info key={idx} {...i} />
              ))}
            </InfoContainer>
          </DetailsContainer>
        </ContentLoader>
      </Wrapper>
    </ContentWrapper>
  );
};

export { StarshipPresentation };
