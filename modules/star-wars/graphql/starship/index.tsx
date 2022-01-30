import * as React from 'react';
import { StarshipPresentation } from '@md-sw-starship/layers/presentation';
import { StarshipAPIContextProvider } from '@md-sw-starship/layers/api/starship';

const StarshipContainer = () => (
  <StarshipAPIContextProvider>
    <StarshipPresentation />
  </StarshipAPIContextProvider>
);

export { StarshipContainer };
