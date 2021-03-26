import { AxiosInstance } from 'axios';

export interface Planet {
  name: string;
  rotationPeriod: string;
  orbitalPeriod: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surfaceWater: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export const getPlanetControllers = (api: AxiosInstance) => ({
  getPlanet: (id: string) => api.get<Planet>(`/planets/${id}`)
});
