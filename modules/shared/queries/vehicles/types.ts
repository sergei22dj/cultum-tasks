import * as V from '@md-shared/types/vehicle';

export type Vehicle = Pick<V.Vehicle, 'id'| 'name'>
export type Vehicles = Vehicle[]

export interface GetVehiclesResponse {
    allVehicles: {
        totalcount: number;
        vehicles: Vehicles;
    };
}

export interface GetVehiclesVariables {
  after?: string;
  before?: string;
  first?: number;
  last?: number;
}