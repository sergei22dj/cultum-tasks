import * as React from 'react';
// context
import { PersonAPIContext } from '@md-sw-person/layers/api/person';
// view components
import Image from 'next/image';
import { Info } from '@md-sw/shared/components/info';
import { ContentLoader } from '@md-ui/loaders/content-loader';
// views
import { Name, Wrapper, ImgContainer, InfoContainer, ContentWrapper, DetailsContainer } from '@md-sw/shared/views';

const IMAGE_WIDTH = 600;
const IMAGE_HEIGHT = 350;

const PersonPresentation = () => {
  const { isLoading, person, error, personInfo } = React.useContext(PersonAPIContext);

  return (
    <ContentWrapper>
      <Wrapper>
        <ContentLoader isLoading={isLoading} error={error}>
          <ImgContainer>
            <Image
              alt='Kenobi'
              layout='responsive'
              placeholder='blur'
              width={IMAGE_WIDTH}
              height={IMAGE_HEIGHT}
              src='/static/images/Ben-Kenobi.jpg'
              blurDataURL='/static/images/Ben-Kenobi.jpg'
            />
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
