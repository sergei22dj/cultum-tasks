import React from 'react';
import { MainLayout } from '@md-shared/layouts/main';
import { PeopleWithBLLContainer } from '@md-sw/graphql/people-with-bl-layer';

const PeopleWithBLLPage = () => {
  return (
    <MainLayout>
      <PeopleWithBLLContainer />
    </MainLayout>
  );
};

export default PeopleWithBLLPage;
