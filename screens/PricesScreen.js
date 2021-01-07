import React, { Component, useEffect, useState} from 'react';
import { FlatList, StyleSheet, Text, View, Dimensions, ImageBackground, Image, ScrollView} from 'react-native';

export default class PricesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.onDayPress = this.onDayPress.bind(this);
  }

  UNSAFE_componentWillMount(){
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch("http://192.168.0.114:3000/")
    const json = await response.json();
    this.setState({data: json});
  };

  onDayPress(day, title) {
    this.setState({
      selected: day.dateString
    });
    this.props.navigation.navigate('CreateBooking', { bookingDate : day, bookingRoom: title })
  }

  render() {
 
  return (
      <View style={[styles.container]}>
        <ImageBackground source={require('../assets/main2.jpg')} style={styles.imageStyle}/>
          <View style={styles.logoStyle}>
            <Image source={require('../assets/logo.png')}/>
            <View style={styles.viewButtonStyle}> 
              <ScrollView style={styles.viewBackgroundStyle}>
                <View style={styles.viewStyle}>
                <Text></Text>
                <Text style={styles.roomsExtraText}>Each of our games has a different cost, to which a fixed price of  40 RON/ person is added.</Text>
                <Text></Text>
                <Text></Text>
                <Text style={styles.roomsExtraText}>In order to calculate the final cost for your experience, please check the chart below:</Text>
                <Text></Text>
                  <FlatList
                  data = {this.state.data}
                  keyExtractor = {(x,i)=>i.toString()}
                  renderItem = {({item})=>
                  <View style={styles.viewStyle}>
                  <Text style={styles.roomsText}>{`${item.title}`}({`${item.time}`}.min)</Text>
                  <Text style={styles.roomsText}>{`${item.roomPrice}`} lei for the game(+{`${item.clientPrice}`} lei/person)</Text>
                  <Text></Text>
                  </View>
                  }
                  >
                  </FlatList>
                  <Text></Text>
                <Text style={styles.roomsExtraText}>Example for a group of 4 persons playing Secret Society: 60 lei + (4 pers. x 40 lei) = 220 lei</Text>
                <Text></Text>
                </View>
              </ScrollView>
            </View> 
          </View>  
      </View> 
    );
  }
}
 
const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  roomsExtraText:{
    fontSize: 20,
    color: "white",
    textAlign: "center"
  },
  roomsText:{
    fontSize: 20,
    color: "#cc5233",
    textAlign: "center"
  },
  roomsImage:{
    width:'80%',
    height:150
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