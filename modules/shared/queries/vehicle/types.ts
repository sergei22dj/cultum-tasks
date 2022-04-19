import { Vehicle } from '@md-shared/types/vehicle';

export type GetVehicle = Pick<Vehicle, 'id' | 'name' | 'model' | 'crew' | 'maxAtmospheringSpeed' | 'created'>;

export interface GetVehicleResponse {
  vehicle: GetVehicle;
}

export interface GetVehicleVariables {
  id?: string;
  vehicleId?: string;
}
