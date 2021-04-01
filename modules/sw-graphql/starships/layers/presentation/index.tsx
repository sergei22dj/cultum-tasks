import * as React from 'react';
// view components
import { Card } from '@md-mi/card';
import { ContentLoader } from '@md-ui/loaders/content-loader';
// context
import { StarshipsAPIContext } from '@md-sw-starships/layers/api/starships';
import { StarshipsBLContext } from '@md-sw-starships/layers/business';
// views
import { ContentWrapper, Wrapper } from '@md-shared/views/common';

const StarshipsPresentation = () => {
  const { isLoading, error } = React.useContext(StarshipsAPIContext);
  const { starshipsList } = React.useContext(StarshipsBLContext);

  return (
    <ContentWrapper>
      <ContentLoader isLoading={isLoading} error={error}>
        <Wrapper>
          {starshipsList.map((starship) => (
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
