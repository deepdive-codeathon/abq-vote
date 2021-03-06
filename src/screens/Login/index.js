/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {Text, Keyboard} from 'react-native';
import {useStoreState, useStoreActions} from 'easy-peasy';
import {STATUS} from '../../constants';
import LoadingActionContainer from '../../components/LoadingActionContainer';
import {
  Section,
  Container,
  PasswordInputX,
  InputX,
  ButtonX,
} from '../../components';

import useTheme from '../../themes/Context';
import useAuth from '../../services/Auth';
import {showInfoToast} from '../../lib/Toast';
import BottomPanel from '../../components/Panel';

export default () => {
  const onChange = useStoreActions(actions => actions.login.onLoginInputChange);
  const {login} = useAuth();
  const {theme} = useTheme();

  const inputUserName = useRef();
  const inputPassword = useRef();

  const panelRef = useRef();

  const onSubmit = () => {
    inputPassword.current.focus();
  };

  const {username, password, status} = useStoreState(state => ({
    user: state.login.username,
    pass: state.login.password,
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
            {'welcome'}
          </Text>
          <Text
            style={{
              fontStyle: 'italic',
              fontSize: 20,
              color: theme.colors.primary,
              marginBottom: 20,
            }}>
            🗳 ABQ VOTE 🗳
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
                key: 'user',
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
            label={'login'}
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
