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
import {LocaleContextProvider} from './i18n/LocaleContext';
import {NetInfoProvider} from './lib/NetInfo/Context';

import {Screen} from './components';
import useTheme from './themes/Context';
import useTranslation from './i18n';
// import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
//create the easy store
const store = createStore();

//return root component
const Root = () => {
  return (
    <Screen>
      <NetInfoProvider>
        <LocaleContextProvider>
          <StoreProvider store={store}>
            <StatusBar translucent backgroundColor={'rgba(0,0,0,0.2)'} />
            <ThemeProvider>
              <ThemeConsumer />
            </ThemeProvider>
          </StoreProvider>
        </LocaleContextProvider>
      </NetInfoProvider>
    </Screen>
  );
};

const ThemeConsumer = props => {
  const {theme} = useTheme();
  const {t} = useTranslation();

  return (
    <PaperProvider theme={theme}>
      <AppContextProvider>
        <PrimaryNav
          uriPrefix={APP_PREFIX}
          screenProps={{theme, t}}
          ref={nav => NavigationService.setTopLevelNavigator(nav)}
        />
      </AppContextProvider>
    </PaperProvider>
  );
};

//temp workaround for react-native-gesture-handler in react-native 0.61
// take a look https://github.com/react-native-community/releases/issues/140#issuecomment-532819601
export default Root;
