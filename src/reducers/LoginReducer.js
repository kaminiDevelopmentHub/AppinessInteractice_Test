import { LoginType } from '../actions/ActionType';

const DEFAULT_STATE = {
  loginMessage: null,
  userInfo: {
    userName: '',
    password: ''
  }
};

const setTextField = (state, action) => {
  const login = {};
  Object.assign(login, state.userInfo);
  login[action.data.name] = action.data.value;
  const newState = {};
  Object.assign(newState, state, { userInfo: login, loginMessage: null });
  return newState;
};

const setLogin = (state, action) => {
  const newState = [];
  Object.assign(newState, state);

  if (action.loginSuccessMessage) {
    newState.userInfo = {};
    newState.isAuthendicated = false;
    newState.loginSuccessMessage = action.loginSuccessMessage;
  } else {
    newState.loginMessage = null;
  }
  return newState;
};

const setLogOut = (state) => {
  const newState = [];
  Object.assign(newState, state);

  newState.userInfo = {};
  const test = false;
  newState.isAuthendicated = JSON.stringify(test);
  newState.loginMessage = '';
  localStorage.setItem('userInfo', {});
  localStorage.removeItem('isAuthenticated');
  localStorage.setItem('loginMessage', '');
  return newState;
};

const setDefault = (state) => {
  const newState = {};
  Object.assign(newState, state, DEFAULT_STATE);
  return newState;
};

const setLoginFailed = (state, action) => {
  const newState = [];
  Object.assign(newState, state);
  // newState.isAuthendicated = action.isAuthendicated;
  newState.loginMessage = action.loginMessage;
  return newState;
};

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case LoginType.LOGIN_SUCCESS:
      return setLogin(state, action);
    case LoginType.LOGIN_FAILED:
      return setLoginFailed(state, action);
    case LoginType.SET_LOGIN_TEXT_FIELD:
      return setTextField(state, action);
    case LoginType.LOGIN_ERROR:
      return setDefault(state);
    case LoginType.LOGOUT_SUCCESS:
      return setLogOut(state);
    default:
      return state;
  }
}
