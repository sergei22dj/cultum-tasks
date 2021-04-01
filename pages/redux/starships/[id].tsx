import * as React from 'react';
// view components
import { MainLayout } from '@md-shared/layouts/main';
import { StarshipContainer } from '@md-modules/star-wars/redux/starship';

const StarshipPage = () => (
  <MainLayout>
    <StarshipContainer />
  </MainLayout>
);

export default StarshipPage;
