import TestModel from './models/Test';
import LoginModel from './models/Login';
import ConfigureStore from './ConfigureStore';
import Api from '../services/Api';

let store = null;
let apiClient = null;
let model = {
  test: TestModel,
  login: LoginModel,
};
const createStore = () => {
  console.log('LOG_createstore ok');

  apiClient = Api.createApiClient();
  store = ConfigureStore(model, apiClient);
  return store;
};

// 👇 Kickoff our StoreCreator and store instance

export default createStore;
export {store as StoreService, apiClient as ApiService};
