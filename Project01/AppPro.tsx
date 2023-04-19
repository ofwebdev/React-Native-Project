import React from 'react';

import {StyleSheet, Text, View, useColorScheme} from 'react-native';

export default function AppPro(): JSX.Element {
  const isDarkMood = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <Text style={isDarkMood ? styles.whiteText : styles.whiteText}>
        Hello from AppPro Components
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: '#fff',
  },
  darkText: {
    color: '#000',
  },
});
