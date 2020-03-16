import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default ({ handlePress, palette }) => (
  <TouchableOpacity onPress={handlePress}>
    <Text style={styles.text}>{palette.paletteName}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
