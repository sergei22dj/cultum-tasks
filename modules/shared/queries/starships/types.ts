import { Starship } from '@md-shared/types/starship';

export type Starships = Pick<
  Starship,
  'id' | 'name' | 'status' | 'costInCredits' | 'hyperdriveRating' | 'passengers' | 'class'
>[];

export interface GetStarshipsResponse {
  starships: Starships;
}

export interface GetStarshipsVariables {
  after?: string;
  before?: string;
  first?: number;
  last?: number;
  skip?: number;
  orderBy?:
    | 'status_ASC'
    | 'status_DESC'
    | 'updatedAt_ASC'
    | 'updatedAt_DESC'
    | 'createdAt_ASC'
    | 'createdAt_DESC'
    | 'id_ASC'
    | 'id_DESC'
    | 'costInCredits_ASC'
    | 'costInCredits_DESC'
    | 'hyperdriveRating_ASC'
    | 'hyperdriveRating_DESC'
    | 'passengers_ASC'
    | 'passengers_DESC'
    | 'cargoCapacity_ASC'
    | 'cargoCapacity_DESC'
    | 'name_ASC'
    | 'name_DESC'
    | 'crew_ASC'
    | 'crew_DESC'
    | 'length_ASC'
    | 'length_DESC'
    | 'maxAtmospheringSpeed_ASC'
    | 'maxAtmospheringSpeed_DESC'
    | 'mglt_ASC'
    | 'mglt_DESC'
    | 'consumables_ASC'
    | 'consumables_DESC'
    | 'class_ASC'
    | 'class_DESC';
}
