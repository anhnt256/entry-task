import { userConstants } from '../constants/userConstant';

const initialState = {
  users: [],
  loggedIn: false,
  loading: false,
  error: null
};

function authReducer(state = initialState, action) {
  let users;
  switch (action.type) {
    case 'USERS_LOGIN_PENDING':
      console.log('FETCH_USER_PENDING');
      return { ...state, loading: true };
    case 'USER_LOGIN_FULFILLED':
      console.log('USER_LOGIN_FULFILLED');
      users = action.payload.data.results;
      return { ...state, loading: false, users, loggedIn: true };
    case 'USER_LOGIN_REJECTED':
      console.log('USER_LOGIN_REJECTED');
      return { ...state, loading: false, error: `${action.payload.message}` };
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}

export default authReducer;
