import * as React from 'react';
import { PeoplePresentation } from '@md-sw/graphql/people-with-bl-layer/layers/presentation';
import { PeopleBLLContextProvider } from '@md-sw/graphql/people-with-bl-layer/layers/business';
import { PeopleAPIContextProvider } from '@md-sw/graphql/people-with-bl-layer/layers/api/people';

const PeopleWithBLLContainer = () => (
  <PeopleAPIContextProvider>
    <PeopleBLLContextProvider>
      <PeoplePresentation />
    </PeopleBLLContextProvider>
  </PeopleAPIContextProvider>
);

export { PeopleWithBLLContainer };
