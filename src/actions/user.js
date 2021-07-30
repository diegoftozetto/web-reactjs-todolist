import { actionTypes } from '../constants/user';
import { login } from '../services/auth';

export const actions = {
  login: (user) => {
    return (dispatch) => {
      dispatch({ type: actionTypes.LOGIN_REQUEST });

      dispatch({ type: actionTypes.LOGIN_REQUEST, payload: user });
      login('9f235380-7db5-4458-bc4a-e53947fd2cb4');
      dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: user });
    };
  },

  logout: () => {
    return (dispatch) => {
      dispatch({ type: actionTypes.LOGOUT });
    };
  },
};
