import React, {useState} from 'react';
import {Text, View} from 'react-native';

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Text>Counter</Text>
    </View>
  );
}
