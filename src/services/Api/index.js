import {create} from 'apisauce';
import {BASE_URL} from '../../config';
import apiMonitor from './Monitor';
import * as Crypto from 'expo-crypto';
//import setInterceptor from './Interceptor';

// Will be hidden in prod as an .env variable
export const URIS = {
  REGISTER: 'register/',
  LOGIN: 'login/',
  LOGOUT: 'logout/',
};

const createApiClient = (baseURL = BASE_URL) => {
  let api = create({
    baseURL,
    headers: {
      Accept: 'application/json',
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
    },
    timeout: 15000,
  });

  api.addMonitor(apiMonitor);
  // use interceptor if using oAuth for authentication
  // setInterceptor(api);

  const setAuthorizationHeader = access_token =>
    api.setHeader('Authorization', 'Bearer ' + access_token);

  const loginUser = payload => api.post(URIS.LOGIN, payload);
  const logoutUser = payload => api.get(URIS.LOGOUT, payload);
  const registerUser = payload => api.post(URIS.REGISTER, payload);

  //kickoff our api functions
  return {
    // client modifiers
    setAuthorizationHeader,
    // checkAppVersion,
    loginUser,
  };
};

export default {createApiClient};
