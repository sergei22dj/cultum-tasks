import { AxiosInstance } from 'axios';

type Planet = {
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
  results: Planet[];
}

export const getPlanetsControllers = (api: AxiosInstance) => ({
  getPlanets: () => api.get<GetPlanetsResponse>('/planets')
});
