import {
  ClientError,
  clientError,
  RequestError,
  ClientSuccess,
  clientSuccess,
  getRequestError
} from '@md-shared/services/api/helpers';
import { createAction, ThunkAction } from '@md-store/helpers';
import { StarshipTechResponse, StarshipTechResult } from '@md-shared/services/api/controllers/starships';

/* ------------- Types ------------- */

export const GET_STARSHIP_LOADING = '@starship/GET_STARSHIP_LOADING';
export const GET_STARSHIP_ERROR = '@starship/GET_STARSHIP_ERROR';
export const GET_STARSHIP_SUCCESS = '@starship/GET_STARSHIP_SUCCESS';

/* ------------- Types and Action Creators ------------- */

export const setGetStarshipLoadingAction = createAction<typeof GET_STARSHIP_LOADING, boolean>(GET_STARSHIP_LOADING);

export type SetGetStarshipLoadingAction = ReturnType<typeof setGetStarshipLoadingAction>;

export const setGetStarshipErrorAction = createAction<typeof GET_STARSHIP_ERROR, string>(GET_STARSHIP_ERROR);

export type SetGetStarshipErrorAction = ReturnType<typeof setGetStarshipErrorAction>;

export const setGetStarshipSuccessAction = createAction<typeof GET_STARSHIP_SUCCESS, StarshipTechResult>(
  GET_STARSHIP_SUCCESS
);

export type SetGetStarshipSuccessAction = ReturnType<typeof setGetStarshipSuccessAction>;

type Actions = SetGetStarshipLoadingAction | SetGetStarshipErrorAction | SetGetStarshipSuccessAction;

/* ------------- Initial State ------------- */

export type InitialState = {
  loading: boolean;
  error: null | string;
  data: StarshipTechResult | null;
};

export const INITIAL_STATE: InitialState = {
  loading: false,
  error: null,
  data: null
};

/* ------------- Thunks ------------- */

export const performAPIGetStarship = (
  id: string
): ThunkAction<
  typeof GET_STARSHIP_LOADING | typeof GET_STARSHIP_ERROR | typeof GET_STARSHIP_SUCCESS,
  Promise<ClientSuccess<StarshipTechResponse> | ClientError<RequestError>>
> => async (dispatch, getState, createApi) => {
  const api = createApi();

  try {
    dispatch(setGetStarshipLoadingAction(true));

    const { data } = await api.getStarship(id);

    dispatch(setGetStarshipSuccessAction(data.result));

    return clientSuccess(data);
  } catch (error) {
    const errorMap = getRequestError(error);

    dispatch(setGetStarshipErrorAction(error.message));

    return clientError(errorMap);
  } finally {
    dispatch(setGetStarshipLoadingAction(false));
  }
};

/* ------------- Hookup Reducers To Types ------------- */

export function reducer(state = INITIAL_STATE, action: Actions): InitialState {
  switch (action.type) {
    case GET_STARSHIP_SUCCESS:
      return {
        ...state,
        data: action.payload || null,
        error: null
      };
    case GET_STARSHIP_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case GET_STARSHIP_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
