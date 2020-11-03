import * as P from '@md-shared/types/planet';

export type Planet = Pick<P.Planet, 'id' | 'name' | 'status' | 'population' | 'orbitalPeriod' | 'gravity' | 'diameter'>;

export interface GetPlanetResponse {
  planet: Planet;
}

export interface GetPlanetVariables {
  where: {
    id?: string;
    name?: string;
  };
}
