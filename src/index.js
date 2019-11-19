import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import './config/ReactotronConfig';

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

console.tron.log('Hello Caio');

export default function App() {
  return (
    <View style={styles.conteiner}>
      <Text style={styles.welcome}>Hello World!</Text>
      <Text style={styles.welcome}>Caio Xavier.</Text>
    </View>
  );
}
