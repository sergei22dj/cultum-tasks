import * as React from 'react';
// view components
import { Card } from '@md-sw/shared/components/card';
import { ContentLoader } from '@md-ui/loaders/content-loader';
// context
import { StarshipsAPIContext } from '@md-sw-starships/layers/api/starships';
// views
import { ContentWrapper, Wrapper, Description, Title } from '@md-shared/views/common';
import { Loader } from '@md-modules/shared/components/ui/loaders/loader';

const StarshipsPresentation = () => {
  const { isLoading, error, starships, loadMore } = React.useContext(StarshipsAPIContext);
console.log(isLoading)
  return (
    <ContentWrapper>
      <Title>SSG (Static-side Generation)</Title>

      <Description>
        If a page uses Static Generation, the page HTML is generated at build time. That means in production, the page
        HTML is generated when you run `next build`. This HTML will then be reused on each request. It can be cached by
        a CDN. You can also use it with Client-side Rendering to bring in additional data.
      </Description>

      <Title>When should I use SSG?</Title>

      <Description>
        You can use Static Generation for many types of pages, including:
        <ul>
          <li>Marketing pages</li>
          <li>Blog posts and portfolios</li>
          <li>E-commerce product listings</li>
          <li>Help and documentation</li>
        </ul>
      </Description>

      <ContentLoader error={error} isLoading={isLoading}>
        <Wrapper>
          
          {starships.map((starship) => ( 
                <Card
              key={starship.id}
              href='/graphql/starships/[id]'
              as={`/graphql/starships/${starship.id}`}
              {...starship} />
              
          ))}
          
        </Wrapper>
      </ContentLoader>
      <button onClick={loadMore}>ЕЩЕ!!!</button>
    </ContentWrapper>
  );
};

export { StarshipsPresentation };
