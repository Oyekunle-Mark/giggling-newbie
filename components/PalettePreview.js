import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';

export default ({ handlePress, palette }) => (
  <TouchableOpacity onPress={handlePress}>
    <Text style={styles.text}>{palette.paletteName}</Text>
    <FlatList
      horizontal={true}
      data={palette.colors.slice(0, 5)}
      keyExtractor={item => item.colorName}
      renderItem={({ item }) => (
        <View style={[styles.box, { backgroundColor: item.hexCode }]} />
      )}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  box: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});
