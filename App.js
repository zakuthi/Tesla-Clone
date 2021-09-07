// import {StatusBar} from 'expo-status-bar';

import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import CarItem from './componennts/CarItem';
const App = () => {
  return (
    <View style={styles.container}>
      <CarItem />
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
