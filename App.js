import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

const App = () => (
  <SafeAreaView>
    <View>
      <Text style={styles.text}>Here are some boxes of different colors</Text>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
