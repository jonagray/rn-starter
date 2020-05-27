import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Dashboard</Text>
      <Button 
        title="Go to Components Demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button 
        title="Go to List Demo"
        onPress={() => navigation.navigate('Components')}
      />
      {/* <TouchableOpacity >
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;


