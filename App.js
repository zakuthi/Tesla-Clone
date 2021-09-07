// import {StatusBar} from 'expo-status-bar';

import React from 'react';
import {StyleSheet, View} from 'react-native';
import CarItem from './componennts/CarItem';
import CarsList from './componennts/CarList';
const App = () => {
  return (
    <View style={styles.container}>
      <CarsList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
