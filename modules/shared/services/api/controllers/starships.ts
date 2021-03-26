import { AxiosInstance } from 'axios';

type Starship = {
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
  results: Starship[];
}

export const getStarshipsControllers = (api: AxiosInstance) => ({
  getStarships: () => api.get<GetStarshipsResponse>('/starships')
});
