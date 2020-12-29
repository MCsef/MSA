import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, ScrollView} from 'react-native';

export default function CorporateScreen({navigation}) {

  return (
    <View style={[styles.container]}>
      <ImageBackground source={require('../assets/main2.jpg')} style={styles.imageStyle}/>
        <View style={styles.logoStyle}>
          <Image source={require('../assets/logo.png')}/>
          <View style={styles.viewButtonStyle}> 
            <ScrollView style={styles.viewBackgroundStyle}>
              <Text style={styles.textStyle}>{"\n"}SERVICES</Text>
              <Text style={styles.textStyle}>{"\n"}{"\n"}TEAM BUILDING @ THE CODEX{"\n"}</Text>
              <View style={styles.viewStyle}>
                <Image source={require('../assets/team_building.png')} style={styles.roundedImageStyle}/>
              </View>
              <Text style={styles.textStyle}>{"\n"}Are you planning a corporate party or a team building for you and your colleagues? You have a large team but you’d want all people to have the exact same experience/ game?</Text>
              <Text style={styles.textStyle}>{"\n"}Then come try the only Challenge Rooms in Romania! You’ll face a unique and adrenaline filled mission, where your ambition, attention and team work will play a paramount role in your success. Prove your team player abilities in the “Fair-play” game mode or surprise your opponents with the “Sabotage” game mode.</Text>
              <Text style={styles.textStyle}>{"\n"}{"\n"}KIDS/ TEENAGERS PARTIES @ THE CODEX{"\n"}</Text>
              <View style={styles.viewStyle}>
                <Image source={require('../assets/parties.png')} style={styles.roundedImageStyle}/>
              </View>
              <Text style={styles.textStyle}>{"\n"}It’s your daughter’s/ son’s birthday? Is she/ he older than 12 but younger than 18? Are children playgrounds obsolete but you feel like it’s too soon for club/ bar parties?</Text>
              <Text style={styles.textStyle}>{"\n"}Then throw them an escape party!</Text>
              <Text style={styles.textStyle}>{"\n"}We guarantee and extremely fun and entertaining experience, and we offer specially designated areas for food & cake serving plus tons of surprises for your kid and his/ her guests!</Text>
              <Text style={styles.textStyle}>{"\n"}{"\n"}SPECIAL PROJECTS{"\n"}</Text>
              <View style={styles.viewStyle}>
                <Image source={require('../assets/special_projects.png')} style={styles.roundedImageStyle}/>
              </View>
              <Text style={styles.textStyle}>{"\n"}With more than 10 years of experience in advertising and event planning, our team can help you create incredible experiences for your clients and/ or colleagues. We develop customized escape games for product launches, conferences,, corporate events ad team buildings. We have specially designed games that can accommodate up to 400 people and we offer the possibility to tailor any concept/ theme on a given brief.</Text>
              <Text style={styles.textStyle}>{"\n"}We have already developed and implemented highly appreciated game experiences for several multinational companies, advertising agencies and some of the best team building firms. Send us your brief or ask for our credentials at office@thecodex.ro .</Text>
              <Text style={styles.textStyle}>{"\n"}{"\n"}PUZZLES & ROOM DESIGN{"\n"}</Text>
              <View style={styles.viewStyle}> 
                <Image source={require('../assets/puzzle_and_design.png')} style={styles.roundedImageStyle}/>
              </View>
              <Text style={styles.textStyle}>{"\n"}Are you interested in opening your own escape room? Are you looking for concepts, decorations, props or special puzzle ideas? Do you want to purchase a completely packaged escape room or maybe you are just shopping for a particular puzzle/ challenge idea? Then contact us at office@thecodex.ro and we will do our best to meet -and exceed-  your demands at very cost-efficient fees.</Text>
              <Text style={styles.textStyle}>{"\n"}The Codex is the sole creator of the first Challenge Rooms in the world – a real  life escape game combined with a strategic board game. This concept has the highest request rate and it received amazing reviews. If you are interested in purchasing this game or the base concept, write us an e-mail at office@thecodex.ro .{"\n"}</Text>
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
  },
  roundedImageStyle:
  {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  viewStyle:
  {
    justifyContent: "center", 
    alignItems: "center",
  }
});
