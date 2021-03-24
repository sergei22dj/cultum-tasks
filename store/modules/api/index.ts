import { combineReducers } from 'redux';
// local
import * as starships from './starships';

export type APIReducers = {
  starships: starships.InitialState;
};

export const apiReducers = combineReducers<APIReducers>({
  starships: starships.reducer
});

export { starships };
