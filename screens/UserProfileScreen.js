import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions} from 'react-native';
import ButtonWithBackgrund from './ButtonWithBackground';

export default function UserProfileScreen({navigation}) {

  const pressRoomsHandler=()=>{
    navigation.navigate('RoomsScreen')
  }

  const pressProfileInfoHandler=()=>{
    navigation.navigate('ProfileInfoScreen')
  }

  return (
    <View style={[styles.container]}>
      <ImageBackground source={require('../assets/main2.jpg')} style={styles.imageStyle}/>
        <View style={styles.logoStyle}>
          <Image source={require('../assets/logo.png')}/>
          <View style={styles.viewButtonStyle}> 
            <View style={styles.viewBackgroundStyle}>
              <ButtonWithBackgrund text="SEE ROOMS" color="#30261d" onPress={pressRoomsHandler}/>
              <Text></Text>
              <ButtonWithBackgrund text="SEE PROFILE INFO" color="#30261d" onPress={pressProfileInfoHandler}/> 
            </View>
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
  viewBackgroundStyle:
  {
    backgroundColor: "black", 
    justifyContent: "center", 
    alignItems: "center", 
    borderRadius: 24,
    width: Dimensions.get('window').width-50, 
    height: Dimensions.get('window').height-300,
    position: "absolute",
    alignContent: "center"
  }
});
