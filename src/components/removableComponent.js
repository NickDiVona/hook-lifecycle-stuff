import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const RemovableComponent = (props) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <TouchableOpacity style={props.styling} onPress={props.onPress}>
      <View>
        <Text>Click to Delete this Button and Reset Count</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RemovableComponent;
