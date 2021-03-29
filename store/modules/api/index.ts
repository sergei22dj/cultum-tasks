import { combineReducers } from 'redux';
// local
import * as starships from './starships';
import * as starship from './starship';
import * as planets from './planets';
import * as planet from './planet';

export type APIReducers = {
  starships: starships.InitialState;
  planets: planets.InitialState;
  planet: planet.InitialState;
  starship: starship.InitialState;
};

export const apiReducers = combineReducers<APIReducers>({
  starships: starships.reducer,
  planets: planets.reducer,
  planet: planet.reducer,
  starship: starship.reducer
});

export { starships, planets, planet, starship };
