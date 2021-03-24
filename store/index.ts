// libs
import { combineReducers } from 'redux';
// shapes
import { APIReducers } from './modules/api';
import { UIReducers } from './modules/ui';

export type RootStore = {
  ui: UIReducers;
  api: APIReducers;
};

export const rootStore = combineReducers<RootStore>({
  ui: require('./modules/ui').uiReducers,
  api: require('./modules/api').apiReducers
});
