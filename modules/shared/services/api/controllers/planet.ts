import { AxiosInstance } from 'axios';
export interface PlanetTech {
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

export interface PlanetTechResponce {
  message: string;
  result: PlanetTechResponceResult;
}

export interface PlanetTechResponceResult {
  description: string;
  properties: PlanetTech;
  uid: string;
}

export const getPlanetControllers = (api: AxiosInstance) => ({
  getPlanet: (id: string) => api.get<PlanetTechResponce>(`/planets/${id}`)
});
