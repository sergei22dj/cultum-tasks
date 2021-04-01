import * as React from 'react';
// view components
import { MainLayout } from '@md-shared/layouts/main';
import { PlanetContainer } from '@md-modules/star-wars/redux/planet';
// types
import { GetServerSidePropsContext } from 'next';
import { ThunkDispatch } from '@md-store/helpers';
// store
import * as API from '@md-store/modules/api';
import { initializeStore } from 'lib/redux/initStore';

const PlanetPage = () => (
  <MainLayout>
    <PlanetContainer />
  </MainLayout>
);

export async function getServerSideProps(context: GetServerSidePropsContext) {
  if (!context.params?.id) return;

  const id = context.params.id as string;
  const reduxStore = initializeStore();
  const dispatch = reduxStore.dispatch as ThunkDispatch;

  await dispatch(API.planets.getPlanet.performAPIGetPlanet(id));

  return { props: { initialReduxState: reduxStore.getState() } };
}

export default PlanetPage;
