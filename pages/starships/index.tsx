import * as React from 'react';
// view components
import { MainLayout } from '@md-shared/layouts/main';
import { StarshipsContainer } from '@md-sw-starships/index';
// queries
import { GET_STARSHIPS_QUERY } from '@md-queries/starships';
// lib
import { initializeApollo } from '../../lib/apolloClient';

const StarshipsPage = () => (
  <MainLayout>
    <StarshipsContainer />
  </MainLayout>
);

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_STARSHIPS_QUERY,
    variables: { first: 5 }
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    }
  };
}

export default StarshipsPage;
