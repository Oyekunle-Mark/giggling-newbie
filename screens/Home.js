import React, { useState, useCallback, useEffect } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';

import PalettePreview from '../components/PalettePreview';

const URL = 'https://color-palette-api.kadikraman.now.sh/palettes';

export default ({ navigation, route }) => {
  const [colorPalettes, setColorPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const newColorPallete = route.params
    ? route.params.newColorPallete
    : undefined;

  const fetchColorPalettes = useCallback(async () => {
    const response = await fetch(URL);
    const color_resp = await response.json();

    if (response.ok) {
      setColorPalettes(color_resp);
    }
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchColorPalettes();
    setIsRefreshing(false);
  }, []);

  useEffect(() => {
    fetchColorPalettes();
  }, []);

  useEffect(() => {
    if (newColorPallete) {
      setColorPalettes(palettes => [newColorPallete, ...colorPalettes]);
    }
  }, [newColorPallete]);

  return (
    <FlatList
      style={styles.list}
      data={colorPalettes}
      keyExtractor={item => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          handlePress={() => {
            navigation.navigate('ColorPalette', item);
          }}
          palette={item}
        />
      )}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      ListHeaderComponent={
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ColorPaletteModal');
          }}>
          <Text style={styles.buttonText}>Add a color scheme</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'teal',
    marginBottom: 10,
  },
});
