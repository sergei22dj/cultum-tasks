import { AxiosInstance } from 'axios';

type StarshipTech = {
  uid: string;
  name: string;
  url: string;
};

export interface GetStarshipsResponse {
  message: string;
  total_records: number;
  total_pages: number;
  previous: string;
  next: string;
  results: StarshipTech[];
}

export interface StarshipTechProperties {
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
  properties: StarshipTechProperties;
  uid: string;
}

export interface StarshipTechResponse {
  message: string;
  result: StarshipTechResult;
}

export const getStarshipsControllers = (api: AxiosInstance) => ({
  getStarships: () => api.get<GetStarshipsResponse>('/starships'),
  getStarship: (id: string) => api.get<StarshipTechResponse>(`/starships/${id}`)
});
