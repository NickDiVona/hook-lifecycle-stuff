import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import RemovableComponent from './src/components/removableComponent';

export default function App() {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState('lightgray');

  const buttonPressed = () => {
    setCount(count + 1);
  };

  const renderRemoveableComponent = () => {
    if (count !== 0) {
      return (
        <RemovableComponent
          styling={styles.buttonStyle}
          changeColor={() => setBgColor('limegreen')}
          onPress={() => setCount(0)}
        />
      );
    } else {
      return <View />;
    }
  };
  //on initial mount AND on every update of the count
  useEffect(() => {
    if (count % 5 === 0) {
      setBgColor('lightsalmon');
    } else {
      setBgColor('lightblue');
    }
    // });     //comment out the below line and comment out this line to update every time anything related to the component changes
  }, [count]); //uncomment this to make the effect only fireif the count changes.

  return (
    <View style={styles.containerStyle}>
      <View style={[styles.colorfulBoxStyle, { backgroundColor: bgColor }]} />
      <Text style={styles.randomTextStyle}>
        The box above changes color based on events!
      </Text>

      <Text style={styles.randomTextStyle}>Count: {count}</Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => buttonPressed()}
      >
        <View>
          <Text>Click to Increment Count</Text>
        </View>
      </TouchableOpacity>
      {renderRemoveableComponent()}
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  buttonStyle: {
    height: 60,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
    marginBottom: 20,
    borderRadius: 20
  },
  randomTextStyle: { marginBottom: 20, fontSize: 18 },
  colorfulBoxStyle: {
    height: 100,
    width: 100,
    marginBottom: 20
  }
});
