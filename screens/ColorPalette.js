import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import ColorBox from '../components/ColorBox';

export default ({ route }) => {
  const { colors } = route.params;

  return (
    <View style={styles.container}>
      <FlatList
        data={colors}
        keyExtractor={item => item.hexCode}
        renderItem={({ item }) => (
          <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
