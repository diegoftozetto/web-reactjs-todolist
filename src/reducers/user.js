import { actionTypes } from '../constants/user';
import { isAuthenticated } from '../services/auth';

const INITIAL_STATE = {
  logged: isAuthenticated(),
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return { ...state, logged: false };
    case actionTypes.LOGIN_SUCCESS:
      return { ...state, logged: true };
    case actionTypes.LOGIN_FAILURE:
      return { ...state, logged: false };
    case actionTypes.LOGOUT:
      return { ...state, logged: false };
    default:
      return { ...state };
  }
};
