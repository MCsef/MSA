import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions} from 'react-native';

function ContactScreen({navigation}) {
  return (
    <View style={[styles.container]}>
      <ImageBackground source={require('../assets/main2.jpg')} style={styles.imageStyle}/>
        <View style={styles.logoStyle}>
          <Image source={require('../assets/logo.png')}/>
        </View>
        <View style={styles.viewtextStyle}>
          <View style={styles.viewBackgroundStyle}>
            <Text style={styles.textStyle}>Some info about user</Text>
          </View>
        </View>
    </View>  
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageStyle: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  logoStyle: {
    position: "absolute",
    justifyContent: "center",
    top: "8%"
  },
  viewtextStyle:
  {
      backgroundColor: "transparent",
      position: "absolute",
      alignContent: "center"
  },
  textStyle:
  {
      color: "#c3c1c1",
      textAlign: "center",
      paddingLeft: 25,
      paddingRight: 25
  },
  viewBackgroundStyle:
  {
    backgroundColor: "black", 
    justifyContent: "center", 
    alignItems: "center", 
    borderRadius: 24,
    width: Dimensions.get('window').width-50, 
    height: Dimensions.get('window').height-300
  }
});

export default ContactScreen;