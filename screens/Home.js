import React, { useState, useCallback, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import PalettePreview from '../components/PalettePreview';
// import { COLOR_PALETTE } from '../data';

const URL = 'https://color-palette-api.kadikraman.now.sh/palettes';

export default ({ navigation }) => {
  const fetch_colors = useCallback(async () => {
    const result = await fetch(URL);
    const colors = await result.json();

    if (result.ok) {
    }
  }, []);

  return (
    <FlatList
      style={styles.list}
      data={[]}
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
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: 'white',
  },
});
