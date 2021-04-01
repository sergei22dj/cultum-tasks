import * as React from 'react';
// context
import { StarshipAPIContext } from '@md-sw-starship/layers/api/starship';
import { StarshipBLContext } from '@md-sw-starship/layers/business';
// view components
import { Info } from '@md-sw/shared/components/info';
import { ContentLoader } from '@md-ui/loaders/content-loader';
// views
import { Name, Wrapper, ImgContainer, InfoContainer, ContentWrapper, DetailsContainer } from '@md-sw/shared/views';

const StarshipPresentation = () => {
  const { isLoading, starship, error } = React.useContext(StarshipAPIContext);
  const { starshipInfo } = React.useContext(StarshipBLContext);

  return (
    <ContentWrapper>
      <Wrapper>
        <ContentLoader isLoading={isLoading} error={error}>
          <ImgContainer>
            <img src='/static/images/starship.jpg' alt='Kenobi' />
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
