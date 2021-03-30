import { combineReducers } from 'redux';
// local
import * as starships from '../api/starships';
import * as planets from '../api/planets';

export type APIReducers = {
  starships: starships.StarshipsAPIReducers;
  planets: planets.PlanetsAPIReducers;
};

export const apiReducers = combineReducers<APIReducers>({
  starships: starships.starshipsReducers,
  planets: planets.planetsReducers
});

export { starships, planets };
