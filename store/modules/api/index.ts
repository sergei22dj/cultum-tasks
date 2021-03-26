import { combineReducers } from 'redux';
// local
import * as starships from './starships';
import * as planets from './planets';

export type APIReducers = {
  starships: starships.InitialState;
  planets: starships.InitialState;
};

export const apiReducers = combineReducers<APIReducers>({
  starships: starships.reducer,
  planets: planets.reducer
});

export { starships, planets };
