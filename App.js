import {AppLoading} from 'expo';
import {Asset} from 'expo-asset';
import * as Font from 'expo-font';
import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {StoreProvider} from 'easy-peasy';
import {Provider as PaperProvider} from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons';

import {APP_PREFIX} from './Config/index';

import NavigationService from './Navigation';
import createStore from './Store';
import PrimaryNav from './Navigation/AppNavigation';

import {ThemeProvider} from './Themes/Context/ThemeContext';
import {AppContextProvider} from './Services/Auth/AppContext';
import {LocaleContextProvider} from './i18n/LocaleContext';
import {NetInfoProvider} from './Lib/NetInfo/Context';

import {Screen} from './Components';
import useTheme from './Themes/Context';
import useTranslation from './i18n';
// import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
//create the easy store
const store = createStore();


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

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
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
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

// //return root component
// const Root = () => {
//   return (
//     <Screen>
//       <NetInfoProvider>
//         <LocaleContextProvider>
//           <StoreProvider store={store}>
//             <StatusBar translucent backgroundColor={'rgba(0,0,0,0.2)'} />
//             <ThemeProvider>
//               <ThemeConsumer />
//             </ThemeProvider>
//           </StoreProvider>
//         </LocaleContextProvider>
//       </NetInfoProvider>
//     </Screen>
//   );
// };


//temp workaround for react-native-gesture-handler in react-native 0.61
// take a look https://github.com/react-native-community/releases/issues/140#issuecomment-532819601
// export default Root;
