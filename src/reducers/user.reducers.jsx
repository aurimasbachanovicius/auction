import { LOGIN_USER, REGISTER_USER } from '../actions/user.actions';

const userAuthentication = (state = [], action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { id: action.id };
    case REGISTER_USER:
      return { id: action.id };
    default:
      return state;
  }
};

export default userAuthentication;
