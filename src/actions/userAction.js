import { userConstants } from '../constants/userConstant';
import axios from 'axios';

function login(username, password) {
  console.log('start login action');

  // ajax login here
  // axios.post('https://randomuser.me/api',{
  // 	username: username,
  // 	password: password
  // }).then(user => {
  // 	history.push('/list');
  // 	return {
  // 		type: userConstants.LOGIN_SUCCESS,
  // 		user: user
  // 	};
  // }).catch(function (error) {
  // 	return { type: userConstants.LOGIN_FAILURE };
  // });
  return {
    type: userConstants.USER_LOGIN,
    payload: axios.get('https://randomuser.me/api')
  };
}

function logout() {
  //ajax logout here
  return { type: userConstants.USER_LOGOUT };
}

export const userActions = {
  login,
  logout
};
