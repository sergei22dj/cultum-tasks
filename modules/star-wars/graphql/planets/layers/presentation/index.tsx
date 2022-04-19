import * as React from 'react';
// view components
import { Card } from '@md-sw/shared/components/card';
import { ContentLoader } from '@md-ui/loaders/content-loader';
// context
import { PlanetsAPIContext } from '@md-sw-planets/layers/api/planets';
// views
import { ContentWrapper, Description, Title, Wrapper } from '@md-shared/views/common';

const PlanetsPresentation = () => {
  const { isLoading, error, planets } = React.useContext(PlanetsAPIContext);

  return (
    <ContentWrapper>
      <Title>SSR (Server-side Rendering)</Title>

      <Description>
        If a page uses Server-side Rendering, the page HTML is generated on each request. Simply put, with each change,
        a fully assembled HTML file comes from the server.
      </Description>

      <ContentLoader isLoading={isLoading} error={error}>
        <Wrapper>
          {planets.map((planet) => (
            <Card key={planet.id} href='/graphql/planets/[id]' as={`/graphql/planets/${planet.id}`} {...planet} />
          ))}
        </Wrapper>
      </ContentLoader>
    </ContentWrapper>
  );
};

export { PlanetsPresentation };
