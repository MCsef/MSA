import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity} from 'react-native';

function MainScreen(props) {
  return (
    <View style={[styles.container]}>
      <ImageBackground source={require('../assets/main2.jpg')} style={styles.imageStyle}/>
        <View style={styles.logoStyle}>
          <Image source={require('../assets/logo.png')}/>
          <TouchableOpacity
        style={{width:'100%',height:40,backgroundColor:'red', 
        alignItems:'center',justifyContent:'center', position: "absolute", top: "1000%"}}
        >
        <Text style={{color:'white', fontSize: 16}}>Bottom Button</Text>
        </TouchableOpacity>
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
  buttonStyle:
  {
    flex: 1,justifyContent: 'flex-end'
  }
});

export default MainScreen;
