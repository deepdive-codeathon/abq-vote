/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {Text, Keyboard} from 'react-native';
import {useStoreState, useStoreActions} from 'easy-peasy';
import {STATUS} from '../../Constants';
import LoadingActionContainer from '../../Components/LoadingActionContainer';
import {
  Section,
  Container,
  PasswordInputX,
  InputX,
  ButtonX,
} from '../../Components';

import useTheme from '../../Themes/Context';
import useAuth from '../../Services/Auth';
import {showInfoToast} from '../../Lib/Toast';
import BottomPanel from '../../Components/Panel';
import useTranslation from '../../i18n';

export default () => {
  const onChange = useStoreActions(actions => actions.login.onLoginInputChange);
  const {t} = useTranslation();
  const {login} = useAuth();
  const {theme} = useTheme();

  const inputUserName = useRef();
  const inputPassword = useRef();

  const panelRef = useRef();

  const onSubmit = () => {
    inputPassword.current.focus();
  };

  const {username, password, status} = useStoreState(state => ({
    username: state.login.username,
    password: state.login.password,
    status: state.login.status,
  }));

  const loginUser = () => {
    Keyboard.dismiss();

    if (!username || !password) {
      showInfoToast('Username and password are mandatory, try again !');
    }

    login({
      username,
      password,
    });
  };

  const loading = status == STATUS.FETCHING;

  return (
    <Container>
      <LoadingActionContainer>
        <Section>
          <Text
            style={{
              fontSize: 48,
              fontWeight: 'bold',
              color: theme.colors.accent,
              marginTop: 60,
              marginBottom: 20,
            }}>
            {t('welcome')}
          </Text>
          <Text
            style={{
              fontStyle: 'italic',
              fontSize: 20,
              color: theme.colors.primary,
              marginBottom: 20,
            }}>
            react-native-easy-starter
          </Text>
        </Section>
        <Section>
          <InputX
            label="USER NAME"
            // mode="outlined"
            ref={inputUserName}
            style={{backgroundColor: '#fafafa'}}
            autoCapitalize="none"
            returnKeyType={'next'}
            onSubmitEditing={onSubmit}
            onChangeText={text =>
              onChange({
                key: 'username',
                value: text,
              })
            }
            value={username}
          />
          <PasswordInputX
            ref={inputPassword}
            value={password}
            // mode="outlined"
            style={{backgroundColor: '#fafafa'}}
            label="PASSWORD"
            returnKeyType={'go'}
            onSubmitEditing={loginUser}
            onChangeText={text =>
              onChange({
                key: 'password',
                value: text,
              })
            }
          />
        </Section>
        <Section>
          <ButtonX
            loading={loading}
            dark={true}
            color={loading ? theme.colors.accent : theme.colors.primary}
            onPress={loginUser}
            label={t('login')}
          />

          <ButtonX
            mode={'text'}
            onPress={() => panelRef.current.show()}
            label=" NEED HELP "
          />
        </Section>
      </LoadingActionContainer>

      <BottomPanel ref={panelRef} />
    </Container>
  );
};
