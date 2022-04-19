import * as React from 'react';
import { VehicleAPIContextProvider } from './layers/api';
import { VehiclePresentation } from './layers/presentation';

const VehicleContainer = () => (
    <VehicleAPIContextProvider>
        <VehiclePresentation />
    </VehicleAPIContextProvider>
)

export { VehicleContainer };