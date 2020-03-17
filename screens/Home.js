import React, { useState, useCallback, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import PalettePreview from '../components/PalettePreview';
// import { COLOR_PALETTE } from '../data';

const URL = 'https://color-palette-api.kadikraman.now.sh/palettes';

export default ({ navigation }) => {
  const [colors, setColors] = useState([]);

  const fetch_colors = useCallback(async () => {
    const response = await fetch(URL);
    const color_resp = await response.json();

    if (response.ok) {
      setColors(color_resp);
    }
  }, []);

  useEffect(() => {
    fetch_colors();
  }, []);

  return (
    <FlatList
      style={styles.list}
      data={colors}
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
