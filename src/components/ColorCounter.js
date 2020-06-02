import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return <View>
    <Text>{color}</Text>
    {/* The onIncrease and onDecrease props are passed in as callbacks */}
    <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
    <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
  </View>
};

const styles = StyleSheet.create({});

export default ColorCounter;