import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import PalettePreview from '../components/PalettePreview';
import { COLOR_PALETTE } from '../data';

export default ({ navigation }) => (
  <FlatList
    style={styles.list}
    data={COLOR_PALETTE}
    keyExtractor={item => item.paletteName}
    renderItem={({ item }) => (
      <PalettePreview
        handlePress={() => {
          navigation.navigate('ColorPalette', item);
        }}
        palette={item}
      />
    )}
  />
);

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: 'white',
  },
});
