export const REGISTER_USER = 'REGISTER_USER';

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';

// eslint-disable-next-line no-unused-vars
const login = (email, password) => {
  const request = user => ({ type: USER_LOGIN_REQUEST, user });
  const success = user => ({ type: USER_LOGIN_SUCCESS, user });
  const failure = error => ({ type: USER_LOGIN_ERROR, error });

  return dispatch => {
    dispatch(request(email));

    setTimeout(() => {
      dispatch(success(email));
    }, 1000);

    setTimeout(() => {
      dispatch(failure('error string'));
    }, 10000);
  };
};

const registerUser = id => {
  return { type: REGISTER_USER, id };
};

export const userActions = {
  login,
  registerUser
};
