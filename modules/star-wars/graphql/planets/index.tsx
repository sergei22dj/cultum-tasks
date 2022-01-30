import * as React from 'react';
import { PlanetsPresentation } from '@md-sw-planets/layers/presentation';
import { PlanetsAPIContextProvider } from '@md-sw-planets/layers/api/planets';

const PlanetsContainer = () => (
  <PlanetsAPIContextProvider>
    <PlanetsPresentation />
  </PlanetsAPIContextProvider>
);

export { PlanetsContainer };
