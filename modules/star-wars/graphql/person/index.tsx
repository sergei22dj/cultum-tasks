import * as React from 'react';
import { PersonPresentation } from '@md-sw-person/layers/presentation';
import { PersonAPIContextProvider } from '@md-sw-person/layers/api/person';

const PersonContainer = () => (
  <PersonAPIContextProvider>
    <PersonPresentation />
  </PersonAPIContextProvider>
);

export { PersonContainer };
