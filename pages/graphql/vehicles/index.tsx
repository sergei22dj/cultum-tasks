import * as React from 'react';
// view components
import { MainLayout } from '@md-shared/layouts/main';
import { VehiclesContainer } from '@md-modules/star-wars/graphql/vehicles';
// queries
import { GET_VEHICLES_QUERY } from '@md-queries/vehicles';
// types
import { GetVehiclesResponse, GetVehiclesVariables } from '@md-queries/vehicles/types';
// lib
import { initializeApollo } from '../../../lib/apolloClient';


const VehiclesPage = () => (
  <MainLayout>
    <VehiclesContainer />
  </MainLayout>
);

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  try {
    await apolloClient.query<GetVehiclesResponse, GetVehiclesVariables>({
      query: GET_VEHICLES_QUERY,
      variables: { first: 5 }
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('GET_VEHICLES_QUERY_ERROR', error);
  }

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    }
  };
}

export default VehiclesPage;
