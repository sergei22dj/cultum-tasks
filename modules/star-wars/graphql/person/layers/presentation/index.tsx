import * as React from 'react';
// context
import { PersonAPIContext } from '@md-sw-person/layers/api/person';
import { PersonBLContext } from '@md-sw-person/layers/business';
// view components
import { Info } from '@md-sw/shared/components/info';
import { ContentLoader } from '@md-ui/loaders/content-loader';
// views
import { Name, Wrapper, ImgContainer, InfoContainer, ContentWrapper, DetailsContainer } from '@md-sw/shared/views';

const PersonPresentation = () => {
  const { isLoading, person, error } = React.useContext(PersonAPIContext);
  const { personInfo } = React.useContext(PersonBLContext);

  return (
    <ContentWrapper>
      <Wrapper>
        <ContentLoader isLoading={isLoading} error={error}>
          <ImgContainer>
            <img src='/static/images/Ben-Kenobi.jpg' alt='Kenobi' />
          </ImgContainer>
          <DetailsContainer>
            {person && <Name>{person.name}</Name>}
            <InfoContainer>
              {personInfo.map((i, idx) => (
                <Info key={idx} {...i} />
              ))}
            </InfoContainer>
          </DetailsContainer>
        </ContentLoader>
      </Wrapper>
    </ContentWrapper>
  );
};

export { PersonPresentation };
