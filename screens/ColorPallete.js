import React from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';

import ColorBox from '../components/ColorBox';
import { COLORS } from '../data';

export default () => (
  <SafeAreaView>
    <View style={styles.container}>
      <FlatList
        data={COLORS}
        keyExtractor={item => item.hexCode}
        renderItem={({ item }) => (
          <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
        )}
        ListHeaderComponent={<Text style={styles.text}>Solarized</Text>}
      />
    </View>
  </SafeAreaView>
);
