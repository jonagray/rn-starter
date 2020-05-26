// Import Libraries
import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

// Create a component that returns JSX
const ComponentsScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>This is the components screen</Text>
    </View>
  );
};

// Create a stylesheet for the component
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

// Export component that was just created
export default ComponentsScreen;