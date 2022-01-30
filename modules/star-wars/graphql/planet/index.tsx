import * as React from 'react';
import { PlanetPresentation } from '@md-sw-planet/layers/presentation';
import { PlanetAPIContextProvider } from '@md-sw-planet/layers/api/planet';

const PlanetContainer = () => (
  <PlanetAPIContextProvider>
    <PlanetPresentation />
  </PlanetAPIContextProvider>
);

export { PlanetContainer };
