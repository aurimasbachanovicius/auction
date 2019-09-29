import { LOGIN_USER, REGISTER_USER } from '../actions/user.actions';

const userAuthentication = (state = [], action) => {
  switch (action.type) {
    case LOGIN_USER:
      // eslint-disable-next-line no-console
      console.log('login user reducer');
      return [...state, { id: action.id }];
    case REGISTER_USER:
      // eslint-disable-next-line no-console
      console.log('register user reducer');
      return [...state, { id: action.id }];
    default:
      return state;
  }
};

export default userAuthentication;
