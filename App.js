import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import ColorBox from './components/ColorBox';
import { COLORS } from './data';

const App = () => (
  <NavigationContainer>
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
  </NavigationContainer>
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
