import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TextInput} from 'react-native';

export default function MainScreen({navigation}) {

  const pressSignUpHandler=()=>{
    navigation.navigate('LoginScreen')
  }

  return (
    <View style={[styles.container]}>
      <ImageBackground source={require('../assets/main2.jpg')} style={styles.imageStyle}/>
        <View style={styles.logoStyle}>
          <Image source={require('../assets/logo.png')}/>
          <View style={styles.viewButtonStyle}> 
            <Text style={styles.textStyle}>First Name</Text>
            <TextInput placeholder="First Name" placeholderTextColor="#6666" color="white" style={styles.TextInput}/>
            <Text style={styles.textStyle}>Last Name</Text>
            <TextInput placeholder="Last Name" placeholderTextColor="#6666" color="white" style={styles.TextInput}/>
            <Text style={styles.textStyle}>Email</Text>
            <TextInput placeholder="Your Email" placeholderTextColor="#6666" color="white" style={styles.TextInput}/>
            <Text style={styles.textStyle}>Password</Text>
            <TextInput placeholder="Your Password" secureTextEntry={true} placeholderTextColor="#6666" color="white" style={styles.TextInput}/>
            <Text style={styles.textStyle}>Confirm Password</Text>
            <TextInput placeholder="Retype Password" secureTextEntry={true} placeholderTextColor="#6666" color="white" style={styles.TextInput}/>
            <Button title="Sign up" onPress={pressSignUpHandler}/> 
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
  textStyle:
  {
      color: "#c3c1c1",
      textAlign: "center",
      paddingLeft: 25,
      paddingRight: 25
  },
});
