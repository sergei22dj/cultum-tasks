import * as React from 'react';
// libs
import { initializeApollo } from '../../../lib/apolloClient';
// view components
import { MainLayout } from '@md-shared/layouts/main';
import { PlanetContainer } from '@md-sw-planet/index';
import { VehicleContainer } from '@md-modules/star-wars/graphql/vehicle';
// types
import { GetServerSidePropsContext } from 'next';
import { GetVehicleResponse, GetVehicleVariables } from '@md-queries/vehicle/types';
// queries
import { GET_VEHICLE_QUERY } from '@md-queries/vehicle';

const VehiclePage = () => (
  <MainLayout>
    <VehicleContainer />
  </MainLayout>
);

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const apolloClient = initializeApollo();

  const { params } = context;

  try {
    await apolloClient.query<GetVehicleResponse, GetVehicleVariables>({
      query: GET_VEHICLE_QUERY,
      variables: { id: params?.id as string }
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('GET_VEHICLE_QUERY_ERROR', error);
  }

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    }
  };
}

export default VehiclePage;
