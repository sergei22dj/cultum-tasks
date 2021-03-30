import { combineReducers } from 'redux';
// local
import * as getPlanet from './get-planet';
import * as getPlanets from './get-planets';

export type PlanetsAPIReducers = {
  getPlanet: getPlanet.InitialState;
  getPlanets: getPlanets.InitialState;
};

export const planetsReducers = combineReducers<PlanetsAPIReducers>({
  getPlanet: getPlanet.reducer,
  getPlanets: getPlanets.reducer
});

export { getPlanet, getPlanets };
