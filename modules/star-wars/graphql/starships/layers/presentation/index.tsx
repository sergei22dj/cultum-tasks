import * as React from 'react';
// view components
import { Card } from '@md-sw/shared/components/card';
import { ContentLoader } from '@md-ui/loaders/content-loader';
// context
import { StarshipsAPIContext } from '@md-sw-starships/layers/api/starships';
// views
import { ContentWrapper, Wrapper } from '@md-shared/views/common';

const StarshipsPresentation = () => {
  const { isLoading, error, starships } = React.useContext(StarshipsAPIContext);

  return (
    <ContentWrapper>
      <ContentLoader isLoading={isLoading} error={error}>
        <Wrapper>
          {starships.map((starship) => (
            <Card
              key={starship.id}
              href='/graphql/starships/[id]'
              as={`/graphql/starships/${starship.id}`}
              {...starship}
            />
          ))}
        </Wrapper>
      </ContentLoader>
    </ContentWrapper>
  );
};

export { StarshipsPresentation };
