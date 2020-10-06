import { Starship } from '@md-shared/types/starship';

export type GetStarship = Pick<
  Starship,
  'id' | 'status' | 'costInCredits' | 'hyperdriveRating' | 'passengers' | 'name' | 'class'
>;

export interface GetStarshipResponse {
  starship: GetStarship;
}

export interface GetStarshipVariables {
  where: {
    id?: string;
    name?: string;
  };
}
