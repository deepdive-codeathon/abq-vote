/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import LoadingActionContainer from '../../components/LoadingActionContainer';
import {Container, ButtonX, HeaderButton} from '../../components';
import NavigationStyles from '../../styles/NavigationStyles';
import NavigationService from '../../navigation';
import useTheme from '../../themes/Context';
import useAuth from '../../'

const MainScreen = ({navigation}) => {
  const {theme} = useTheme();

  return (
    <LoadingActionContainer fixed>
      <Container
        style={{
          justifyContent: 'center',
          padding: 20,
        }}>
        <Text style={{fontSize: 20, padding: 20, textAlign: 'center'}}>
          Profile Screen
        </Text>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <Image
                style={styles.avatar}
                source={{
                  uri: 'https://bootdey.com/img/Content/avatar/avatar6.png',
                }}
              />

              <Text style={styles.name}>Metal Mayor</Text>
              <Text style={styles.userInfo}>metalbitches6969@hotmail.com </Text>
              <Text style={styles.userInfo}>Nuevo Mexico</Text>
            </View>
          </View>

          <View style={styles.body}>
            <Text>
              Bio: Hardcore Mayor of Albuquerque, metal fan, and beer drinker.
              The Future is Millenial! My Handle is ABQHardMayor (ABQMetalMayor
              was taken) on Insta, Twitter, Reddit, Youtube, Facebook, Linkedin,
              and Pinterest, where I spend all of my time talking about what we
              should do in the great ABQ!!!! ABQ por Vida!
            </Text>
          </View>
        </View>
      </Container>
    </LoadingActionContainer>
  );
};

MainScreen.navigationOptions = ({navigation, screenProps}) => {
  const {theme} = screenProps;
  return {
    headerStyle: [
      NavigationStyles.header_statusBar,
      {backgroundColor: theme.colors.header},
    ],
    headerTitle: 'Profile',
    headerTintColor: theme.colors.headerTitle,
    headerTitleStyle: [
      NavigationStyles.headerTitle,
      {color: theme.colors.headerTitle},
    ],
  };
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#DCDCDC',
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: '#000000',
    fontWeight: '600',
  },
  userInfo: {
    fontSize: 16,
    color: '#778899',
    fontWeight: '600',
  },
  body: {
    backgroundColor: '#778899',
    height: 500,
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
  },
  infoContent: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 5,
  },
  iconContent: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: '#FFFFFF',
  },
});


export default MainScreen;
