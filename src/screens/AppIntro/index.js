/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {View, Image, Text} from 'react-native';
import {Container, ButtonX} from '../../components';
import NavigationService from '../../navigation/index';
import Routes from '../../navigation/Routes/index';
import AppIntroSlider from '../../lib/AppIntroSlider';
import colors from '../../themes/Colors';

const slides = [
  {
    key: 'Loren Ipsum...',
    title: 'ABQ VOTE',
    text: 'Secure your voting id today!',
    // renderExtra: LanguageSlideItem,
    backgroundColor: colors.blueJeans,
  },
  {
    key: 'bla bla -dos',
    title: 'Step 1',
    text: 'Enter your ID/Login Info',
    backgroundColor: colors.pineapple,
  },

  {
    key: 'There is more-dos',
    title: 'Step 2',
    text: 'Login in with your blockchain held, and encrypted id!',
    backgroundColor: colors.mystic,
  },
  {
    key: 'And some final notes',
    title: 'Step 3',
    text: 'Find your nearest voting location and vote with confidence 👍',
    //   image: require('./Assets/3.jpg'),
    backgroundColor: colors.androidGreen,
  },
];

const AppIntro = props => {
  const _onDone = () => {
    NavigationService.navigate(Routes.LOGIN_SCREEN);
  };

  return (
    <Container>
      <AppIntroSlider
        slides={slides}
        onDone={_onDone}
        onSkip={_onDone}
        showPrevButton={true}
        showSkipButton={true}
      />
    </Container>
  );
};

const _renderItem = item => {
  return (
    <Container
      style={{
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: item.backgroundColor,
      }}>
      <Text style={styles.title}>{item.title}</Text>
      <Image source={item.image} />
      <Text style={styles.text}>{item.text}</Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginVertical: 10,
    color: 'white',
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
});

export default AppIntro;
