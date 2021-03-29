import {
  ClientError,
  clientError,
  RequestError,
  ClientSuccess,
  clientSuccess,
  getRequestError
} from '@md-shared/services/api/helpers';
import { GetStarshipsResponse } from '@md-shared/services/api/controllers';
import { createAction, ThunkAction } from '@md-store/helpers';

/* ------------- Types ------------- */

export const GET_STARSHIPS_LOADING = '@starships/GET_STARSHIPS_LOADING';
export const GET_STARSHIPS_ERROR = '@starships/GET_STARSHIPS_ERROR';
export const GET_STARSHIPS_SUCCESS = '@starships/GET_STARSHIPS_SUCCESS';

/* ------------- Types and Action Creators ------------- */

export const setGetStarshipsLoadingAction = createAction<typeof GET_STARSHIPS_LOADING, boolean>(GET_STARSHIPS_LOADING);

export type SetGetStarshipsLoadingAction = ReturnType<typeof setGetStarshipsLoadingAction>;

export const setGetStarshipsErrorAction = createAction<typeof GET_STARSHIPS_ERROR, string>(GET_STARSHIPS_ERROR);

export type SetGetStarshipsErrorAction = ReturnType<typeof setGetStarshipsErrorAction>;

export const setGetStarshipsSuccessAction = createAction<typeof GET_STARSHIPS_SUCCESS, GetStarshipsResponse>(
  GET_STARSHIPS_SUCCESS
);

export type SetGetStarshipsSuccessAction = ReturnType<typeof setGetStarshipsSuccessAction>;

type Actions = SetGetStarshipsLoadingAction | SetGetStarshipsErrorAction | SetGetStarshipsSuccessAction;

/* ------------- Initial State ------------- */

export type InitialState = {
  loading: boolean;
  error: null | string;
  data: GetStarshipsResponse | null;
};

export const INITIAL_STATE: InitialState = {
  loading: false,
  error: null,
  data: null
};

/* ------------- Thunks ------------- */

export const performAPIGetStarships = (): ThunkAction<
  typeof GET_STARSHIPS_LOADING | typeof GET_STARSHIPS_ERROR | typeof GET_STARSHIPS_SUCCESS,
  Promise<ClientSuccess<GetStarshipsResponse> | ClientError<RequestError>>
> => async (dispatch, getState, createApi) => {
  const api = createApi();

  try {
    dispatch(setGetStarshipsLoadingAction(true));

    const { data } = await api.getStarships();

    dispatch(setGetStarshipsSuccessAction(data));

    return clientSuccess(data);
  } catch (error) {
    const errorMap = getRequestError(error);

    dispatch(setGetStarshipsErrorAction(error.message));

    return clientError(errorMap);
  } finally {
    dispatch(setGetStarshipsLoadingAction(false));
  }
};

/* ------------- Hookup Reducers To Types ------------- */

export function reducer(state = INITIAL_STATE, action: Actions): InitialState {
  switch (action.type) {
    case GET_STARSHIPS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null
      };
    case GET_STARSHIPS_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case GET_STARSHIPS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
