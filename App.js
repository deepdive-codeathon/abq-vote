import React from 'react';
import {StatusBar} from 'react-native';
import {StoreProvider} from 'easy-peasy';
import {Provider as PaperProvider} from 'react-native-paper';

import {APP_PREFIX} from './src/config/index';

import NavigationService from './src/navigation';
import createStore from './src/store';
import PrimaryNav from './src/navigation/AppNavigation';

import {ThemeProvider} from './src/themes/Context/ThemeContext';
import {AppContextProvider} from './src/services/Auth/AppContext';

import {Screen} from './src/components';
import useTheme from './src/themes/Context';
//create the easy store
const store = createStore();

//return root component
const App = () => {
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

export default App;
