import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

const App = () => (
  <SafeAreaView>
    <View styles={styles}>
      <Text>Hello, world!</Text>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  backgroundColor: 'teal',
});

export default App;
