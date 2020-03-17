import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

export default () => {
  const [name, setName] = useState('');

  return (
    <View>
      <TextInput value={name} onChangeText={setName} />
      <Text>This is a Modal!</Text>
    </View>
  );
};
