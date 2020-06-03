import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
    <Text>Password is: {password}</Text>
    {password.length <= 5 ? <Text style={styles.invalid}>Invalid Password</Text> : null}
    {/* {true ? <Text>That was true</Text> : null} */}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
    height: 20
  },
  invalid: {
    color: 'red'
  }
});

export default TextScreen;