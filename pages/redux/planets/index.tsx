import * as React from 'react';
// view components
import { Planets } from '@md-sw-redux/planets';
import { MainLayout } from '@md-shared/layouts/main';
// store
import axios from 'axios';
import { setGetPlanetsSuccessAction } from '@md-store/modules/api/planets';
import { initializeStore } from 'lib/redux/initStore';

const PlanetsPage = () => (
  <MainLayout>
    <Planets />
  </MainLayout>
);

export async function getServerSideProps() {
  const reduxStore = initializeStore();

  const { dispatch } = reduxStore;

  try {
    const data = await axios.get('https://swapi.dev/api/planets');

    dispatch(setGetPlanetsSuccessAction(data.data));
  } catch (err) {
    // console.log(err);
  }
  return { props: { initialReduxState: JSON.parse(JSON.stringify(reduxStore.getState())) } };
}

export default PlanetsPage;
