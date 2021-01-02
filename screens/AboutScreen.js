import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, ScrollView} from 'react-native';
import ButtonWithBackground from './ButtonWithBackground';

export default function AboutScreen({navigation}) {

  const pressRoomsHandler=()=>{
    navigation.navigate('RoomsScreen')
  }

  return (
    <View style={[styles.container]}>
      <ImageBackground source={require('../assets/main2.jpg')} style={styles.imageStyle}/>
        <View style={styles.logoStyle}>
          <Image source={require('../assets/logo.png')}/>
          <View style={styles.viewButtonStyle}> 
            <View style={styles.viewBackgroundStyle}>
              <ScrollView style={styles.viewBackgroundStyle}>
                <Text style={styles.textStyle}>{"\n"}"BEST ESCAPE ROOMS IN BUCHAREST!"</Text>
                <Text style={styles.textStyle}>{"\n"}{"\n"}ESCAPE ROOMS</Text>
                <Text style={styles.textStyle}>{"\n"}A room, a theme, a captivating mission. Mysteries, challenges and mesmerizing setups that transport you in a fascinating fantasy world.</Text>
                <Text style={styles.textStyle}>{"\n"}The only thing that seems real is the constant, obsessive beat of the clock. You have a limited time to escape and minutes seem to pass by quicker and quicker…</Text>
                <Text style={styles.textStyle}>{"\n"}What do we guarantee? Adventure, mystery, adrenaline and… addiction. Because you only have to try it once to become addicted for ever!</Text>
                <Text style={styles.textStyle}>{"\n"}What do we require? Logic, attention to detail and most of all a desire to have amazing, incredible fun! Plus some of your friends to share this amazing experience with you.</Text>
                <Text style={styles.textStyle}>{"\n"}*Minimum 2, maximum 6 people.{"\n"}</Text>
                <View style={styles.viewStyle}>
                  <ButtonWithBackground text="SEE ROOMS" color="#30261d" onPress={pressRoomsHandler}/>
                </View>
                <Text></Text>
                <Text style={styles.textStyle}>{"\n"}{"\n"}CHALLENGE ROOMS</Text>
                <Text style={styles.textStyle}>{"\n"}The Codex is the founder of the first and only Challenge Rooms in the world. Part escape room, part strategic board game. Filled with puzzles, enigmas and conundrum, but also hazard and ruthless competition. Welcome to the one and only real life game where you get to compete against time, against “the house” and against another team, equally motivated and eager to win.</Text>
                <Text style={styles.textStyle}>{"\n"}Two identical rooms. Two teams, 90 minutes and a shocking mission. Plus 500$ that you must spend wisely.</Text>
                <Text style={styles.textStyle}>{"\n"}Test your ambition and determination! Choose to be fair-play or surprise your opponents with clever sabotage techniques. Come try the most electrifying and irresistible game in Romania!</Text>
                <Text style={styles.textStyle}>{"\n"}*Minimum 4, maximum 14 people.{"\n"}</Text>
                <View style={styles.viewStyle}> 
                  <ButtonWithBackground text="SEE ROOMS" color="#30261d" onPress={pressRoomsHandler}/>
                </View>
                <Text></Text>
              </ScrollView>
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
    borderRadius: 24,
    width: Dimensions.get('window').width-50, 
    height: Dimensions.get('window').height-250,
    position: "absolute",
    alignContent: "center"
  },
  viewStyle:
  {
    justifyContent: "center", 
    alignItems: "center",
  }
});
