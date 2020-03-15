import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

const App = () => (
  <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.text}>Here are some boxes of different colors</Text>
      <View style={styles.cyanBox}>
        <Text style={styles.boxText}>Cyan Box: #2aa198</Text>
      </View>
      <View style={styles.blueBox}>
        <Text style={styles.boxText}>Blue Box: #268bd2</Text>
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
    marginBottom: 10,
  },
  cyanBox: {
    backgroundColor: '#2aa198',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  blueBox: {
    backgroundColor: '#268bd2',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
