import { combineReducers } from 'redux';
import { userAuthentication, userRegistration } from './user.reducers';

export default combineReducers({
  userAuthentication,
  userRegistration
});
