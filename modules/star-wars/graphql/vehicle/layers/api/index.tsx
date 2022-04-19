import * as React from 'react';
// libs
import { useRouter } from 'next/router';
// utils
import { useQuery } from '@apollo/client';
import * as U from '@md-utils';
// types
import { ClientError } from '@md-utils/errors/custom';
import { GetVehicleResponse, GetVehicleVariables, GetVehicle } from '@md-queries/vehicle/types';
// queries
import { GET_VEHICLE_QUERY } from '@md-queries/vehicle';

interface VehicleInfo {
  label: string;
  value: string | number;
}

interface Context {
  vehicle?: GetVehicle;
  isLoading: boolean;
  vehicleInfo: VehicleInfo[];
  error?: ClientError<string>;
  refetch: (variables?: Partial<GetVehicleVariables>) => Promise<ClientError<string> | GetVehicle | undefined>;
}

const VehicleAPIContext = React.createContext<Context>({
  vehicleInfo: [],
  isLoading: false,
  refetch: () => Promise.resolve({} as GetVehicle)
});

const VehicleAPIContextProvider: React.FC = ({ children }) => {
  const { query } = useRouter();

  const { data, loading, error, refetch } = useQuery<GetVehicleResponse, GetVehicleVariables>(GET_VEHICLE_QUERY, {
    variables: { id: query.id as string },
    skip: !query.id
  });

  const refetchVehicle = async (variables?: Partial<GetVehicleVariables>) => {
    try {
      const result = await refetch(variables);

      return result.data?.vehicle;
    } catch (error: any) {
      return U.errors.parseAndCreateClientError(error);
    }
  };

  const vehicleInfo = React.useMemo<VehicleInfo[]>(() => {
    if (!data?.vehicle) {
      return [];
    }

    return [
      { label: 'Crew', value: data?.vehicle.crew ?? 'N/A' },
      { label: 'Max Speed', value: data?.vehicle.maxAtmospheringSpeed + ' MPH' ?? 'N/A' },
      { label: 'Created', value: data?.vehicle.created ?? 'N/A' }
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeof data?.vehicle === 'undefined']);

  return (
    <VehicleAPIContext.Provider
      value={{
        vehicleInfo,
        isLoading: loading,
        refetch: refetchVehicle,
        vehicle: data ? data.vehicle : undefined,
        error: error ? U.errors.parseAndCreateClientError(error) : undefined
      }}
    >
      {children}
    </VehicleAPIContext.Provider>
  );
};

export { VehicleAPIContextProvider, VehicleAPIContext };
