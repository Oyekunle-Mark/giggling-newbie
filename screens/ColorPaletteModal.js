import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default () => {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text>This is a Modal!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  container: {
    padding: 5,
    backgroundColor: 'white',
    flex: 1,
  },
});
