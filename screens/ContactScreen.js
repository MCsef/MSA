import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

function ContactScreen(props) {
  return (
    <View style={[styles.container]}>
      <ImageBackground source={require('../assets/main2.jpg')} style={styles.imageStyle}/>
        <View style={styles.logoStyle}>
          <Image source={require('../assets/logo.png')}/>
        </View>
        <View style={styles.viewtextStyle}>
            <Text style={styles.textStyle}>E-mail: office@thecodex.ro</Text>
            <Text style={styles.textStyle}>Parties: party@thecodex.ro</Text>
            <Text style={styles.textStyle}>Tel:(+40) 770.863.122 /+(40) 0744.355.921</Text>
            <Text style={styles.textStyle}>Address: Traian 109 st., Sector 2, Bucharest</Text>
            <Text style={styles.textStyle}>Working hours:</Text>
            <Text style={styles.textStyle}>Tuesday to Sunday from 10:30 to 23:00.</Text>
            <Text style={styles.textStyle}>(Only on confirmed booking basis).</Text>
            <Text style={styles.textStyle}>We’re closed on Mondays.</Text>
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
      alignContent: "center",
      top: "32%"
  },
  textStyle:
  {
      color: "#c3c1c1",
      textAlign: "center",
      paddingLeft: 25,
      paddingRight: 25
  }
});

export default ContactScreen;