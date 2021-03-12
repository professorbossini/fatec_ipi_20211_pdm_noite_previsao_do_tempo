import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import keys from './keys';

export default function App() {
  const endPoint = `https://api.openweathermap.org/data/2.5/forecast?lang=pt_br&units=metric&q=`;
  const apiKey = keys.weatherMapApiKey;
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
