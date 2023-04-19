import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import AppPro from './AppPro';

export default function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <AppPro></AppPro>
      </View>
    </SafeAreaView>
  );
}
