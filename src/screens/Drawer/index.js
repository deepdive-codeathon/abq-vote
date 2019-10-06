import React from 'react';
import {Container, Section} from '../../components';
import {Text, ScrollView} from 'react-native';
import viewStyles from '../../styles/ViewStyles';
import {DrawerItems, SafeAreaView} from 'react-navigation';

const Drawer = props => {
  return (
    <ScrollView>
      <SafeAreaView
        style={viewStyles.container}
        forceInset={{top: 'always', horizontal: 'never'}}>
        <Section style={{paddingTop: 100, backgroundColor: 'white'}}>
          <Text style={{fontSize: 20}}>App Drawer</Text>
        </Section>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Drawer;
