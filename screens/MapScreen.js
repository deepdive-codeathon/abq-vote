import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default function MapScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text>This is the Map Screen</Text>
    </ScrollView>
  );
}

MapScreen.navigationOptions = {
  title: 'Map',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
