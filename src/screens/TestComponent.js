// Import libraries
import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

// Create component

const TestComponent = () => {
  return (
    <View>
      <Text style={textStyles.newTextStyle}>Getting started with React Native!</Text>
      {myName}
    </View>
  );
}

// Create stylesheet
const textStyles = StyleSheet.create({
  newTextStyle: {
    fontSize: 50
  },
  subheadingStyle: {
    fontSize: 20
  }
});

const myName = <Text style={textStyles.subheadingStyle}>Jonny Graybill</Text>;


export default TestComponent;