import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Switch,
  FlatList,
} from 'react-native';

import { COLORS } from '../data';

export default ({ navigation }) => {
  const [name, setName] = useState('');
  const [selectedColor, setSelectedColors] = useState([]);

  const handleSubmit = useCallback(() => {
    if (!name) {
      Alert.alert('Please enter palette name');
    } else if (selectedColor.length < 3) {
      Alert.alert('Please add at least 3 colors');
    } else {
      const newColorPallete = { paletteName: name, colors: selectedColor };
      navigation.navigate('Home', { newColorPallete });
    }
  }, [name, selectedColor]);

  const handleValueChange = useCallback((value, color) => {
    if (value) {
      setSelectedColors(colors => [...colors, color]);
    } else {
      setSelectedColors(colors =>
        colors.filter(
          currentColor => currentColor.colorName !== color.colorName,
        ),
      );
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Name of the palette</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Palette name"
      />
      <FlatList
        data={COLORS}
        keyExtractor={item => item.colorName}
        renderItem={({ item }) => (
          <View style={styles.color}>
            <Text>{item.colorName}</Text>
            <Switch
              value={
                !!selectedColor.find(
                  color => color.colorName === item.colorName,
                )
              }
              onValueChange={selected => {
                handleValueChange(selected, item);
              }}
            />
          </View>
        )}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'whitesmoke',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  container: {
    padding: 10,
    backgroundColor: 'white',
    flex: 1,
  },
  button: {
    height: 40,
    backgroundColor: 'teal',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  name: {
    marginBottom: 10,
  },
  color: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
});
