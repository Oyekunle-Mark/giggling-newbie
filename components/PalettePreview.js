import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default () => (
  <TouchableOpacity
    onPress={() => {
      navigation.navigate('ColorPalette', item);
    }}>
    <Text>{item.paletteName}</Text>
  </TouchableOpacity>
);
