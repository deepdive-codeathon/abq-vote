import {createDrawerNavigator} from 'react-navigation-drawer';
import Routes from '../Routes';
import metrics from '../../themes/Metrics';
import MainStack from './MainStack';

const DrawerStack = createDrawerNavigator({
  [Routes.HOME_STACK]: MainStack,
});

export default DrawerStack;
