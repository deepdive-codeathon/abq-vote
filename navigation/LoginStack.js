import Login from '../Screens/Login';
import {createStackNavigator} from './node_modules/react-navigation-stack';
import Routes from './Routes';
import AppIntro from '../Screens/AppIntro';

export default createStackNavigator(
  {
    [Routes.APP_INTRO]: AppIntro,
    [Routes.LOGIN_SCREEN]: Login,
  },
  {
    // Default config for all screens
    // mode:'modal'
    headerMode: 'none',
    initialRouteName: Routes.APP_INTRO,
  },
);
