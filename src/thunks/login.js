import { actions } from '../actions/user';
import { login } from '../services/auth';

export const thunks = {
  login: () => (dispatch) => {
    //Chamada API
    dispatch(actions.loginRequest());

    login('9f235380-7db5-4458-bc4a-e53947fd2cb4');
    dispatch(actions.loginSuccess());
  },
  logout: () => (dispatch) => {
    //Chamada API
    dispatch(actions.logout());
  },
};
