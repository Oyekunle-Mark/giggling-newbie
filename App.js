import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

const App = () => (
  <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.text}>Here are some boxes of different colors</Text>
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
});

export default App;
