import { createAction } from '@md-store/helpers';

/* ------------- Types ------------- */

export const TOGGLE = '@ui/switch/TOGGLE';

/* ------------- Types and Action Creators ------------- */

export const setToggleAction = createAction<typeof TOGGLE>(TOGGLE);
export type SetToggleAction = ReturnType<typeof setToggleAction>;

type Actions = SetToggleAction;

/* ------------- Initial State ------------- */

export type InitialState = {
  toggled: boolean;
};

export const INITIAL_STATE: InitialState = {
  toggled: false
};

/* ------------- Hookup Reducers To Types ------------- */

export function reducer(state = INITIAL_STATE, action: Actions): InitialState {
  switch (action.type) {
    case TOGGLE:
      return { toggled: !state.toggled };
    default:
      return state;
  }
}
