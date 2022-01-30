import * as React from 'react';
// context
import { PeopleAPIContext } from '@md-sw/graphql/people-with-bl-layer/layers/api/people';
// view components
import { ContentLoader } from '@md-ui/loaders/content-loader';
import Card from '@md-sw/graphql/people-with-bl-layer/components/card';
import Header from '@md-sw/graphql/people-with-bl-layer/components/header';
// views
import { ContentWrapper, Wrapper } from '@md-shared/views/common';
import { ImagesWrapper, Img } from '@md-sw/graphql/people-with-bl-layer/layers/presentation/views';

const IMAGE_WIDTH = 550;
const IMAGE_HEIGHT = 500;

const PeoplePresentation = () => {
  const { isLoading, error, people } = React.useContext(PeopleAPIContext);

  return (
    <ContentWrapper>
      <ContentLoader isLoading={isLoading} error={error}>
        <ImagesWrapper>
          <Img
            placeholder='blur'
            layout='intrinsic'
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
            src='/static/images/layers-without-bll-scheme.png'
            blurDataURL='/static/images/layers-without-bll-scheme.png'
          />
          <Img
            layout='intrinsic'
            placeholder='blur'
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
            src='/static/images/layers-with-bll-scheme.png'
            blurDataURL='/static/images/layers-with-bll-scheme.png'
          />
        </ImagesWrapper>

        <Header />

        <Wrapper>
          {people.map((person) => (
            <Card key={person.id} {...person} />
          ))}
        </Wrapper>
      </ContentLoader>
    </ContentWrapper>
  );
};

export { PeoplePresentation };
