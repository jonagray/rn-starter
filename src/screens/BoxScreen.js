import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { orange } from 'color-name';

const BoxScreen = () => {
  return <View style={styles.parentStyle}>
    <View style={styles.viewOneStyle}></View>
    <View style={styles.viewTwoStyle}></View>
    <View style={styles.viewThreeStyle}></View>
  </View>
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 150,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'red'
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
    alignSelf: 'flex-end'
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'purple'
  }
});

export default BoxScreen;