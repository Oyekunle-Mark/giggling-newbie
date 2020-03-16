import React from 'react';
import { Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

export default ({ handlePress, palette }) => (
  <TouchableOpacity onPress={handlePress}>
    <Text style={styles.text}>{palette.paletteName}</Text>
    <FlatList
      horizontal={true}
      data={palette.colors.slice(0, 5)}
      keyExtractor={item => item.colorName}
      renderItem={({ item }) => <Text>{item.colorName}</Text>}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
