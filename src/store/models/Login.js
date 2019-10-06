import {action, thunk} from 'easy-peasy';
import {ApiService} from '../index';
import {
  setLoginCredentials,
  getLoginCredentials,
  resetLoginCredentials,
} from '../../services/Keychain';
import getValue from '../../services/AsyncStorage';
import {STATUS} from '../../constants';
import {APP_STATE} from '../../constants/index';
import BaseModel from '../Base';

// import {showErrorToast, showLoading} from '../lib/Toast';

const checkLogin = thunk(async (actions, payload, {dispatch, injections}) => {
  const {api} = injections;

  const credentials = await getLoginCredentials();
  if (credentials) {
    actions.changeAppState(APP_STATE.PRIVATE);
  } else {
    actions.changeAppState(APP_STATE.PUBLIC);
  }
});

const loginUser = thunk(async (actions, payload, {dispatch}) => {
  if (!payload.username || !payload.password) {
    return;
  }
  actions.updateStatus(STATUS.FETCHING);
  // let response = await ApiService.loginUser(payload);

  let response = await setLoginCredentials(payload.username, payload.password);

  //mocking api
  setTimeout(() => {
    actions.updateStatus(response.status ? STATUS.SUCCESS : STATUS.FAILED);
    if (!response.status) {
      console.warn(response.error);
    } else {
      actions.changeAppState(APP_STATE.PRIVATE);
    }
  }, 1000);

  // 	ApiService.setAuthorizationHeader(response.data.access_token);
  // 	dispatch.user.requestUserProfile();
});

const LoginModel = {
  //include BaseModel
  ...BaseModel(),
  //include all thunks or actions defined separately
  loginUser,
  checkLogin,
  appstate: APP_STATE.UNKNOWN,
  changeAppState: action((state, payload) => {
    state.appstate = payload;
  }),
  onLoginInputChange: action((state, {key, value}) => {
    state[key] = value;
  }),
};

export default LoginModel;
