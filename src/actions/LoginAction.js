// import axios from 'axios';
import { LoginType } from './ActionType';
// import setAuthorizationToken from '../utils/setAuthorizationToken';
import userInfo from '../../config/userLoginInfo.json';

// const HEADER_CONFIG = {
//   headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' }
// };

export function setTextFiled(data) {
  return { type: LoginType.SET_LOGIN_TEXT_FIELD, data };
}

export function userLogin(loginInfo) {
  return (dispatch) => {
    if (loginInfo.userName === userInfo.username && loginInfo.password === userInfo.password) {
      dispatch({
        type: LoginType.LOGIN_SUCCESS,
        userInfo,
        loginSuccessMessage: 'Login Successsful'
      });
    } else {
      dispatch({ type: LoginType.LOGIN_FAILED, loginMessage: 'invalid username and password' });
    }
  };
}

export function userLogOut() {
  return { type: LoginType.LOGOUT_SUCCESS };
}
