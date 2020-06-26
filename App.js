import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState('white');

  const buttonPressed = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (count >= 5) {
      setBgColor('lightsalmon');
    }
    // });     //comment out the below line and comment out this line to update every time anything related to the component changes
  }, [count]); //uncomment this to make the effect only fireif the count changes.

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text>{count}</Text>
      <TouchableOpacity onPress={() => buttonPressed()}>
        <View>
          <Text>Click me!</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
