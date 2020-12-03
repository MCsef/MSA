import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, ScrollView} from 'react-native';

export default function PartiesScreen({navigation}) {

  return (
    <View style={[styles.container]}>
      <ImageBackground source={require('../assets/main2.jpg')} style={styles.imageStyle}/>
        <View style={styles.logoStyle}>
          <Image source={require('../assets/logo.png')}/>
          <View style={styles.viewButtonStyle}> 
            <ScrollView style={styles.viewBackgroundStyle}>
              <Text style={styles.textStyle}>{"\n"}Anniversary Parties / Children Games / Teenager Parties / Escape Room Party</Text>
              <Text style={styles.textStyle}>{"\n"}Anniversary parties benefit from preferential prices, different from the ones on the Prices page. To receive our offer, please write us an email at party@thecodex.ro.</Text>
              <Text style={styles.textStyle}>{"\n"}Are you planning an anniversary party for children/teenagers between 8-9 and 15-16? Are they bored of the classical playgrounds yet it’s too early for bars and clubs? You want something unconventional, memorable and extremely fun?</Text>
              <Text style={styles.textStyle}>{"\n"}Then come to The Codex Escape Rooms! If you want to organize an unforgettable anniversary party, please write us an email at party@thecodex.ro. We will send you our complete party offer, containing various games and also cake/meal serving options.</Text>
              <Text style={styles.textStyle}>{"\n"}The games in our anniversary party offer are designed especially for children and adapted for their age. Beside the classical escape room, these games combine strategy, team work and attention to details. The outcome is a much more dynamic and complex experience compared to the classic escape room.</Text>
              <Text style={styles.textStyle}>{"\n"}All the anniversary parties are hosted by a dedicated Game Master (with advanced studies in children/adolescent behavior), who interacts and supervises the players throughout the entire experience.</Text>
              <Text style={styles.textStyle}>{"\n"}Additionally, each party hosted at The Codex Escape Rooms benefits from special menu offers.</Text>
              <Text style={styles.textStyle}>{"\n"}During the past years we have hosted hundreds of such parties, and our clients keep coming back each time! No matter your preferences are, send us an email and we will do our best to offer the birthday boy/girl and their friends an unforgettable experience!{"\n"}</Text>
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
  }
});
