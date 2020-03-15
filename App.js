import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

const App = () => (
  <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.text}>Here are some boxes of different colors</Text>
      <View style={styles.cyanBox}>
        <Text style={styles.boxText}>Cyan Box: #2aa198</Text>
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 30,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cyanBox: {
    backgroundColor: '#2aa198',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
