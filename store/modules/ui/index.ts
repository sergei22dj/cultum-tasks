import { combineReducers } from 'redux';
// local
import * as toast from './toast';
import * as modal from './modal';
import * as headerToggle from './header-toggle';

export type UIReducers = {
  toast: toast.InitialState;
  modal: modal.InitialState;
  headerToggle: headerToggle.InitialState;
};

export const uiReducers = combineReducers<UIReducers>({
  toast: toast.reducer,
  modal: modal.reducer,
  headerToggle: headerToggle.reducer
});

export { toast, modal, headerToggle };
