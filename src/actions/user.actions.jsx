export const LOGIN_USER = 'LOGIN_USER';
export const REGISTER_USER = 'REGISTER_USER';

export const loginUser = id => {
  return { type: LOGIN_USER, id };
};

export const registerUser = id => {
  return { type: REGISTER_USER, id };
};
