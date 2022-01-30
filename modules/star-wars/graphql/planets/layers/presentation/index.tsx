import * as React from 'react';
// view components
import { Card } from '@md-sw/shared/components/card';
import { ContentLoader } from '@md-ui/loaders/content-loader';
// context
import { PlanetsAPIContext } from '@md-sw-planets/layers/api/planets';
// views
import { ContentWrapper, Wrapper } from '@md-shared/views/common';

const PlanetsPresentation = () => {
  const { isLoading, error, planets } = React.useContext(PlanetsAPIContext);

  return (
    <ContentWrapper>
      <ContentLoader isLoading={isLoading} error={error}>
        <Wrapper>
          {planets.map((person) => (
            <Card key={person.id} href='/graphql/planets/[id]' as={`/graphql/planets/${person.id}`} {...person} />
          ))}
        </Wrapper>
      </ContentLoader>
    </ContentWrapper>
  );
};

export { PlanetsPresentation };
