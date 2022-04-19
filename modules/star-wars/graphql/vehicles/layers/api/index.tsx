import * as React from 'react';
// libs
import { useQuery } from '@apollo/client';
// utils
import * as U from '@md-utils';
// types
import { GetVehiclesResponse, GetVehiclesVariables, Vehicle, Vehicles } from '@md-queries/vehicles/types';
import { ClientError } from '@md-utils/errors/custom';
// queries
import { GET_VEHICLES_QUERY } from '@md-queries/vehicles';

type VehcilesList = Vehicle & { image: string };

interface Context {
  isLoading: boolean;
  vehicles: VehcilesList[];
  error?: ClientError<string>;
  refetch: (variables?: Partial<GetVehiclesVariables>) => Promise<ClientError<string> | Vehicles>;
}

const VehiclesAPIContext = React.createContext<Context>({
  vehicles: [],
  isLoading: false,
  refetch: () => Promise.resolve([] as Vehicles)
});

const VehiclesAPIContextProvider: React.FC = ({ children }) => {
  // make api call here
  const { data, loading, refetch, error } = useQuery<GetVehiclesResponse, GetVehiclesVariables>(GET_VEHICLES_QUERY, {
    variables: { first: 15 }
  });

  const refetchVehicles = async (variables?: Partial<GetVehiclesVariables>) => {
    try {
      const result = await refetch(variables);

      return result.data ? result.data.allVehicles.vehicles : [];
    } catch (error: any) {
      return U.errors.parseAndCreateClientError(error);
    }
  };

  const vehicles = React.useMemo<VehcilesList[]>(() => {
    return (
      data?.allVehicles.vehicles.map(({ id, name }) => ({
        id,
        name,
        image: '/static/images/vehicle.jpg'
      })) || []
    );
  }, [data?.allVehicles.vehicles]);

  return (
    <VehiclesAPIContext.Provider
      value={{
        vehicles,
        isLoading: loading,
        refetch: refetchVehicles,
        error: error ? U.errors.parseAndCreateClientError(error) : undefined
      }}
    >
      {children}
    </VehiclesAPIContext.Provider>
  );
};

export { VehiclesAPIContextProvider, VehiclesAPIContext };
