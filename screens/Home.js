import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default ({ navigation }) => (
  <View>
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ColorPalette');
      }}>
      <Text>Hello Screen!</Text>
    </TouchableOpacity>
  </View>
);
