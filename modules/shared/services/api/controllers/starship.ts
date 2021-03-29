import { AxiosInstance } from 'axios';

export interface StarshipTech {
  model: string;
  starship_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  hyperdrive_rating: string;
  MGLT: string[];
  cargo_capacity: string[];
  consumables: string;
  pilots: string[];
  created: string;
  edited: string;
  name: string;
  url: string;
}
export interface StarshipTechResult {
  description: string;
  properties: StarshipTech;
  uid: string;
}

export interface StarshipTechResponce {
  message: string;
  result: StarshipTechResult;
}

export const getStarshipControllers = (api: AxiosInstance) => ({
  getStarship: (id: string) => api.get<StarshipTechResponce>(`/starships/${id}`)
});
