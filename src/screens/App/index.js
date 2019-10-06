/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useCallback} from 'react';
import {Text} from 'react-native';
import LoadingActionContainer from '../../components/LoadingActionContainer';
import {Container, ButtonX} from '../../components';
import NavigationStyles from '../../styles/NavigationStyles';
import useAuth from '../../services/Auth';
import useTheme from '../../themes/Context';
import useTranslation from '../../i18n';

const MainScreen = ({navigation}) => {
  const {logout} = useAuth();
  const {theme} = useTheme();

  const {t, localeProvider, changeLocale} = useTranslation();

  const _changeLocale = useCallback(() => {
    changeLocale(
      localeProvider.id == LOCALES.ENGLISH.id
        ? LOCALES.ENGLISH
        : LOCALES.SPANISH,
    );
  }, [changeLocale, localeProvider.id]);

  return (
    <LoadingActionContainer fixed>
      <Container
        style={{
          justifyContent: 'center',
          padding: 20,
        }}>
        <Text style={{fontSize: 24, color: theme.colors.primary}}>
          {t('welcome')}
        </Text>

        <ButtonX dark={true} label={t('logout')} onPress={logout} />

        <ButtonX
          dark={true}
          mode="outline"
          label={t('change_locale')}
          onPress={_changeLocale}
        />
      </Container>
    </LoadingActionContainer>
  );
};

MainScreen.navigationOptions = ({navigation, screenProps}) => {
  const {t, theme} = screenProps;
  return {
    headerStyle: [
      NavigationStyles.header_statusBar,
      {backgroundColor: theme.colors.header},
    ],
    headerTitle: t('notifications'),
    headerTintColor: theme.colors.headerTitle,
    headerTitleStyle: [
      NavigationStyles.headerTitle,
      {color: theme.colors.headerTitle},
    ],
  };
};

export default MainScreen;
