import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button} from 'react-native';

export default function MainScreen({navigation}) {

  const pressContactHandler=()=>{
    navigation.navigate('ContactScreen')
  }

  const pressLoginHandler=()=>{
    navigation.navigate('LoginScreen')
  }

  return (
    <View style={[styles.container]}>
      <ImageBackground source={require('../assets/main2.jpg')} style={styles.imageStyle}/>
        <View style={styles.logoStyle}>
          <Image source={require('../assets/logo.png')}/>
          <View style={styles.viewButtonStyle}> 
            <Button title="Contact Us" onPress={pressContactHandler}/> 
            <Text style={styles.textStyle}></Text>
            <Button title="Go to your account" onPress={pressLoginHandler}/>
          </View> 
        </View>  
    </View> 
  );
} 

const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageStyle: 
  {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  logoStyle:
  {
    position: "absolute",
    justifyContent: "center",
    top: "8%"
  },
  viewButtonStyle:
  {
    flex: 1,
    top: "50%",
    alignItems: 'center'
  },
});
