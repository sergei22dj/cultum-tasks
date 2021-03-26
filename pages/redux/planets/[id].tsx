import * as React from 'react';
// view components
import { MainLayout } from '@md-shared/layouts/main';

// query
// import { GET_PLANET_QUERY } from '@md-sw-planet/queries/planet';
// types
// import { GetServerSidePropsContext } from 'next';
// import { GetPlanetResponse, GetPlanetVariables } from '@md-sw-planet/queries/planet/types';
import { initializeStore } from 'lib/redux/initStore';
import { ThunkDispatch } from '@md-store/helpers';

import * as API from '@md-store/modules/api';
import { PlanetContainer } from '@md-modules/sw-redux/planet';
// libs

const PlanetPage = () => (
  <MainLayout>
    <PlanetContainer />
  </MainLayout>
);

export async function getServerSideProps() {
  // context: GetServerSidePropsContext
  // const { params } = context;

  const reduxStore = initializeStore();
  const dispatch = reduxStore.dispatch as ThunkDispatch;

  await dispatch(API.planets.performAPIGetPlanets());

  return { props: { initialReduxState: reduxStore.getState() } };
}

export default PlanetPage;
