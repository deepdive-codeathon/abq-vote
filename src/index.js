import React from 'react';
import {StatusBar} from 'react-native';
import {StoreProvider} from 'easy-peasy';
import {Provider as PaperProvider} from 'react-native-paper';

import {APP_PREFIX} from './config/index';

import NavigationService from './navigation';
import createStore from './store';
import PrimaryNav from './navigation/AppNavigation';

import {ThemeProvider} from './themes/Context/ThemeContext';
import {AppContextProvider} from './services/Auth/AppContext';

import {Screen} from './components';
import useTheme from './themes/Context';
//create the easy store
const store = createStore();

//return root component
const Root = () => {
  return (
    <Screen>
      <StoreProvider store={store}>
        <StatusBar translucent backgroundColor={'rgba(0,0,0,0.2)'} />
        <ThemeProvider>
          <ThemeConsumer />
        </ThemeProvider>
      </StoreProvider>
    </Screen>
  );
};

const ThemeConsumer = props => {
  const {theme} = useTheme();

  return (
    <PaperProvider theme={theme}>
      <AppContextProvider>
        <PrimaryNav
          uriPrefix={APP_PREFIX}
          screenProps={{theme}}
          ref={nav => NavigationService.setTopLevelNavigator(nav)}
        />
      </AppContextProvider>
    </PaperProvider>
  );
};

export default Root;
