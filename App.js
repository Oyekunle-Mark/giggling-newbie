import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

const App = () => (
  <SafeAreaView style={styles.screen}>
    <View style={styles.container}>
      <Text>Hello, world!</Text>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default App;
