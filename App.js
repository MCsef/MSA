import { StatusBar } from 'expo-status-bar';
import React from 'react';
<<<<<<< b292b47fccdb41d20729749fdd15a91b5874a80a
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
=======
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
>>>>>>> cofigurations

export default function App() {
  console.log("App executed successfuly");
  return (
    <SafeAreaView style={styles.container}>
<<<<<<< b292b47fccdb41d20729749fdd15a91b5874a80a
      <Text>There is still hope!</Text>
=======
      <Text>Hello tester! This is a test</Text>
      <Image source={require('./assets/icon.png')}/>
>>>>>>> cofigurations
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'turquoise',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
