//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, SafeAreaView, Platform } from 'react-native';
import { useDimensions } from "@react-native-community/hooks";

export default function App() {
  console.log("App executed successfuly");
  //console.log(useDimensions());
  return (
    //<SafeAreaView style={[styles.container, containerStyle]}>
      <SafeAreaView
        style={{
          backgroundColor: "purple",
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          //flexWrap: "wrap"
        }}
      >
        <SafeAreaView style={{
          backgroundColor: "green",
          width: 100,
          height: 100
        }}/>
        <SafeAreaView style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
          left: 20,
          top: 20,
          position: "relative"
        }}/>
        <SafeAreaView style={{
          backgroundColor: "pink",
          width: 100,
          height: 100
        }}/>
        <SafeAreaView style={{
          backgroundColor: "grey",
          width: 100,
          height: 100
        }}/>
      </SafeAreaView>
      //<Text>Hello tester! This is a test</Text>
      //<StatusBar style="auto" />
    //</SafeAreaView>
  );
} 

const containerStyle = {
  backgroundColor:"orange"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'turquoise',
    padding: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
