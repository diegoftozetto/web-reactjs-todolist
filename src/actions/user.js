import { actionTypes } from '../constants/user';

export const actions = {
  loginRequest: () => ({ type: actionTypes.LOGIN_REQUEST }),
  loginSuccess: () => ({ type: actionTypes.LOGIN_SUCCESS }),
  loginFailure: () => ({ type: actionTypes.LOGIN_FAILURE }),

  logout: () => ({ type: actionTypes.LOGOUT }),
};
