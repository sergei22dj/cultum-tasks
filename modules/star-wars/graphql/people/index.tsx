import * as React from 'react';
import { PeoplePresentation } from '@md-sw-people/layers/presentation';
import { PeopleAPIContextProvider } from '@md-sw-people/layers/api/people';

const PeopleContainer = () => (
  <PeopleAPIContextProvider>
    <PeoplePresentation />
  </PeopleAPIContextProvider>
);

export { PeopleContainer };
