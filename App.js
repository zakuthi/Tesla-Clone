// import {StatusBar} from 'expo-status-bar';

import React from 'react';
import {StyleSheet, View} from 'react-native';
// import CarItem from './componennts/CarItem';
import CarsList from './componennts/CarList';
import Header from './componennts/Header';
const App = () => {
  return (
    <View style={styles.container}>
      <Header />
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
