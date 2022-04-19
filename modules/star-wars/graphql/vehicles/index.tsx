import * as React from 'react';
import { VehiclesAPIContextProvider } from './layers/api';
import { VehiclesPresentation } from './layers/presentation';

const VehiclesContainer = () => (
    <VehiclesAPIContextProvider>
        <VehiclesPresentation />
    </VehiclesAPIContextProvider>
    
);

    
export { VehiclesContainer }