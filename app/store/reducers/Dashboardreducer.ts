/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

import { IDashBoardState } from 'app/models/reducers/Dashboard';
import { IDashboardResponseState } from 'app/models/actions/Dashboard';

const initialState: IDashBoardState = {
  name: '',
  url: '',
};

export const loginReducer = createReducer(initialState, {
  [types.LOGIN_REQUEST](state: IDashBoardState) {
    return {
      ...state,
    };
  },
  [types.LOGIN_LOADING_ENDED](state: IDashBoardState) {
    return { ...state };
  },
  [types.POKEMON_RESPONSE](
    state: IDashBoardState,
    action: IDashboardResponseState,
  ) {
    return {
      ...state,
      response: action.response,
    };
  },
});
