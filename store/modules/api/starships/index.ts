import { combineReducers } from 'redux';
// local
import * as getStarship from './get-starship';
import * as getStarships from './get-starships';

export type StarshipsAPIReducers = {
  getStarship: getStarship.InitialState;
  getStarships: getStarships.InitialState;
};

export const starshipsReducers = combineReducers<StarshipsAPIReducers>({
  getStarship: getStarship.reducer,
  getStarships: getStarships.reducer
});

export { getStarship, getStarships };
