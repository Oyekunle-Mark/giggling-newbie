import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default ({ handlePress, palette }) => (
  <TouchableOpacity onPress={handlePress}>
    <Text>{palette.paletteName}</Text>
  </TouchableOpacity>
);
