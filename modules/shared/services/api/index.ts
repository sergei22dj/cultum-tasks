import axios from 'axios';
// controllers
import { getStarshipsControllers, getPlanetsControllers } from './controllers';
import { getPlanetControllers } from './controllers/planet';
import { getStarshipControllers } from './controllers/starship';

export type CustomHeaders = { [key: string]: string };
export type APIVariables = {
  token?: string | null;
  baseURL?: string;
  customHeaders?: CustomHeaders;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const createAPI = ({ baseURL = API_URL, customHeaders = {}, token }: APIVariables = {}) => {
  /* ------------- API instance ------------- */

  const api = axios.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
      ...customHeaders,
      ...(token && { Authorization: `Bearer ${token}` })
    },
    timeout: 10000
  });

  /* ------------- Controllers ------------- */

  const getRoot = () => api.get<{ result: string[] }>('/');

  return {
    getRoot,
    // STARSHIPS
    ...getStarshipsControllers(api),
    // STARSHIP
    ...getStarshipControllers(api),
    // PLANETS
    ...getPlanetsControllers(api),
    // PLANET
    ...getPlanetControllers(api)
  };
};

export type CreateApi = (config?: APIVariables) => ReturnType<typeof createAPI>;

export * from './helpers';
