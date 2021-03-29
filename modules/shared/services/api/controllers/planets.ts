import { AxiosInstance } from 'axios';

export type PlanetTech = {
  uid: string;
  name: string;
  url: string;
};

export interface GetPlanetsResponse {
  message: string;
  total_records: number;
  total_pages: number;
  previous: string;
  next: string;
  results: PlanetTech[];
}

export interface PlanetTechProperties {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents?: string[];
  films?: string[];
  created: string;
  edited: string;
  url: string;
}

export interface PlanetTechResponse {
  message: string;
  result: PlanetTechResponseResult;
}

export interface PlanetTechResponseResult {
  description: string;
  properties: PlanetTechProperties;
  uid: string;
}

export const getPlanetsControllers = (api: AxiosInstance) => ({
  getPlanets: () => api.get<GetPlanetsResponse>('/planets'),
  getPlanet: (id: string) => api.get<PlanetTechResponse>(`/planets/${id}`)
});
