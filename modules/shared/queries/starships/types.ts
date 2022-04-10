import { Starship } from '@md-shared/types/starship';

export type Starships = Pick<Starship, 'id' | 'name'>[]; 

export interface GetStarshipsResponse {
  data: any;
  allStarships: {
    totalCount: number;
    starships: Starships;
    pageInfo: endCursor;
    endCursor: string;
  };
}

export interface GetStarshipsVariables {
  after?: string;
  before?: string;
  first?: number;
  last?: number;
}
