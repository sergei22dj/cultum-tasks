import * as React from 'react';
import { StarshipsPresentation } from './layers/presentation';
import { StarshipsAPIContextProvider } from './layers/api/starships';

const StarshipsContainer = () => (
  <StarshipsAPIContextProvider>
    <StarshipsPresentation />
  </StarshipsAPIContextProvider>
);

export { StarshipsContainer };
