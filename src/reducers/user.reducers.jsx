import {
  USER_LOGIN_REQUEST,
  REGISTER_USER,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR
} from '../actions/user.actions';

const initialState = { user: null, loggingIn: false, loggedIn: false };

const userAuthentication = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loggingIn: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, loggedIn: true };
    case USER_LOGIN_ERROR:
      return { ...state, loggingIn: false };
    case REGISTER_USER:
      return { id: action.id };
    default:
      return state;
  }
};

export default userAuthentication;
