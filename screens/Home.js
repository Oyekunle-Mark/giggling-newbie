import React from 'react';
import { View, FlatList } from 'react-native';

import PalettePreview from '../components/PalettePreview';
import { COLOR_PALETTE } from '../data';

export default ({ navigation }) => (
  <View>
    <FlatList
      data={COLOR_PALETTE}
      keyExtractor={item => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          handlePress={() => {
            navigation.navigate('ColorPalette', item);
          }}
          palette={item}
        />
        // <TouchableOpacity
        //   onPress={() => {
        //     navigation.navigate('ColorPalette', item);
        //   }}>
        //   <Text>{item.paletteName}</Text>
        // </TouchableOpacity>
      )}
    />
  </View>
);
