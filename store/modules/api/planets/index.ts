import {
  ClientError,
  clientError,
  RequestError,
  ClientSuccess,
  clientSuccess,
  getRequestError
} from '@md-shared/services/api/helpers';
import { GetPlanetsResponse } from '@md-shared/services/api/controllers';
import { createAction, ThunkAction } from '@md-store/helpers';

/* ------------- Types ------------- */

export const GET_PLANETS_LOADING = '@planets/GET_PLANETS_LOADING';
export const GET_PLANETS_ERROR = '@planets/GET_PLANETS_ERROR';
export const GET_PLANETS_SUCCESS = '@planets/GET_PLANETS_SUCCESS';

/* ------------- Types and Action Creators ------------- */

export const setGetPlanetsLoadingAction = createAction<typeof GET_PLANETS_LOADING, boolean>(GET_PLANETS_LOADING);

export type SetGetPlanetsLoadingAction = ReturnType<typeof setGetPlanetsLoadingAction>;

export const setGetPlanetsErrorAction = createAction<typeof GET_PLANETS_ERROR, string>(GET_PLANETS_ERROR);

export type SetGetPlanetsErrorAction = ReturnType<typeof setGetPlanetsErrorAction>;

export const setGetPlanetsSuccessAction = createAction<typeof GET_PLANETS_SUCCESS, GetPlanetsResponse>(
  GET_PLANETS_SUCCESS
);

export type SetGetPlanetsSuccessAction = ReturnType<typeof setGetPlanetsSuccessAction>;

type Actions = SetGetPlanetsLoadingAction | SetGetPlanetsErrorAction | SetGetPlanetsSuccessAction;

/* ------------- Initial State ------------- */

export type InitialState = {
  loading: boolean;
  error: null | string;
  data: GetPlanetsResponse | null;
};

export const INITIAL_STATE: InitialState = {
  loading: false,
  error: null,
  data: null
};

/* ------------- Thunks ------------- */

export const performAPIGetPlanets = (): ThunkAction<
  typeof GET_PLANETS_LOADING | typeof GET_PLANETS_ERROR | typeof GET_PLANETS_SUCCESS,
  Promise<ClientSuccess<GetPlanetsResponse> | ClientError<RequestError>>
> => async (dispatch, getState, createApi) => {
  const api = createApi();

  try {
    dispatch(setGetPlanetsLoadingAction(true));

    const { data } = await api.getPlanets();

    dispatch(setGetPlanetsSuccessAction(data));

    return clientSuccess(data);
  } catch (error) {
    const errorMap = getRequestError(error);

    dispatch(setGetPlanetsErrorAction(error.message));

    return clientError(errorMap);
  } finally {
    dispatch(setGetPlanetsLoadingAction(false));
  }
};

/* ------------- Hookup Reducers To Types ------------- */

export function reducer(state = INITIAL_STATE, action: Actions): InitialState {
  switch (action.type) {
    case GET_PLANETS_SUCCESS:
      return {
        ...state,
        data: action.payload || null,
        error: null
      };
    case GET_PLANETS_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case GET_PLANETS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
