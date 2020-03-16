import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import { COLOR_PALETTE } from '../data';

export default ({ navigation }) => (
  <View>
    <FlatList
      data={COLOR_PALETTE}
      keyExtractor={item => item.paletteName}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ColorPalette', item);
          }}>
          <Text>{item.paletteName}</Text>
        </TouchableOpacity>
      )}
    />
  </View>
);
