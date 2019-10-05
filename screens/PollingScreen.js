import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default function PollingScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text>This is the Check-In Screen</Text>
    </ScrollView>
  );
}

PollingScreen.navigationOptions = {
  title: 'Poll',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
