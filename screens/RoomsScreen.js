import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, ScrollView} from 'react-native';
import ButtonWithBackgrund from './ButtonWithBackground';

export default function RoomsScreen({navigation}) {

  const pressContactScreenHandler=()=>{
    navigation.navigate('ContactScreen')
  }

  return (
    <View style={[styles.container]}>
      <ImageBackground source={require('../assets/main2.jpg')} style={styles.imageStyle}/>
        <View style={styles.logoStyle}>
          <Image source={require('../assets/logo.png')}/>
          <View style={styles.viewButtonStyle}> 
            <ScrollView style={styles.viewBackgroundStyle}>
              <View style={styles.viewStyle}>
                <Text></Text>
                <ButtonWithBackgrund text="CONTACT" color="#30261d" onPress={pressContactScreenHandler}/>
                <Text></Text>
              </View>
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
    top: "50%",
    alignItems: 'center'
  },
  viewBackgroundStyle:
  {
    backgroundColor: "black", 
    borderRadius: 24,
    width: Dimensions.get('window').width-50, 
    height: Dimensions.get('window').height-300,
    position: "absolute",
    alignContent: "center"
  },
  viewStyle:
  {
    justifyContent: "center", 
    alignItems: "center",
  }
});
