import * as React from 'react';
// view components
import { Starships } from '@md-sw/redux/starships';
import { MainLayout } from '@md-shared/layouts/main';

const StarshipsPage = () => (
  <MainLayout>
    <Starships />
  </MainLayout>
);

export default StarshipsPage;
