import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { COLORS } from '../data';

export default ({ navigation }) => (
  <View>
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ColorPalette', {
          paletteName: 'Solarized',
          colors: COLORS,
        });
      }}>
      <Text>Solarized</Text>
    </TouchableOpacity>
  </View>
);
