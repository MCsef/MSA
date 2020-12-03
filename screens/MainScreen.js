import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView } from 'react-native';
import ButtonWithBackground from './ButtonWithBackground';

export default function MainScreen({navigation}) {

  const pressAboutHandler=()=>{
    navigation.navigate('AboutScreen')
  }

  const pressRoomsHandler=()=>{
    navigation.navigate('RoomsScreen')
  }

  const pressPricesHandler=()=>{
    navigation.navigate('PricesScreen')
  }

  const pressBookingsHandler=()=>{
    navigation.navigate('BookingsScreen')
  }

  const pressPartiesHandler=()=>{
    navigation.navigate('PartiesScreen')
  }

  const pressCorporateHandler=()=>{
    navigation.navigate('CorporateScreen')
  }

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
            <ScrollView style={styles.viewBackgroundStyle}>
              <ButtonWithBackground text="ABOUT" color="#30261d" onPress={pressAboutHandler}/>
              <Text></Text>
              <ButtonWithBackground text="GAMES" color="#30261d" onPress={pressRoomsHandler}/>
              <Text></Text>
              <ButtonWithBackground text="PRICES" color="#30261d" onPress={pressPricesHandler}/>
              <Text></Text>
              <ButtonWithBackground text="BOOKINGS" color="#30261d" onPress={pressBookingsHandler}/>
              <Text></Text>
              <ButtonWithBackground text="PARTIES" color="#30261d" onPress={pressPartiesHandler}/>
              <Text></Text>
              <ButtonWithBackground text="CORPORATE" color="#30261d" onPress={pressCorporateHandler}/>
              <Text></Text>
              <ButtonWithBackground text="CONTACT" color="#30261d" onPress={pressContactHandler}/> 
              <Text></Text>
              <ButtonWithBackground text="GO TO YOUR ACCOUNT" color="#30261d" onPress={pressLoginHandler}/>
            </ScrollView>
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
    top: "5%",
    alignItems: 'center'
  },
  viewBackgroundStyle:
  {
    position: "absolute",
    alignContent: "center"
  }
});
