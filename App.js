import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import ColorBox from './components/ColorBox';
import { COLORS } from './data';

const App = () => (
  <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.text}>Here are some boxes of different colors</Text>

      <FlatList
        data={COLORS}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
        )}
      />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 30,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default App;
