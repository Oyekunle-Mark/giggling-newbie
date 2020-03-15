import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default ({colorName, hexCode}) => {
  const boxColor = {
    backgroundColor: hexCode,
  };

  return (
    <View style={[styles.box, boxColor]}>
      <Text style={styles.boxText}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 5,
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
