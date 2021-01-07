import React, { Component, useEffect, useState} from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, Image, ScrollView, ActivityIndicator, Button} from 'react-native';
import {Calendar} from 'react-native-calendars';


export default class RoomsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false
    };
    this.onDayPress = this.onDayPress.bind(this);
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
    this.props.navigation.navigate('Slot', { bookingDate : day })
  }
  _onPressBack(){
    const {goBack} = this.props.navigation
      goBack()
  }

  render() {
    const info = [
      {_id:"1", title:"Title 1", description:"Description 1", price: 50, numberOfPeople:"2-5/6", language:"English", time: 60, picture:'https://images.unsplash.com/photo-1488279944573-528fd3d03b72?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=889&q=80'},
      {_id:"1", title:"Title 2", description:"Description 2", price: 50, numberOfPeople:"2-6/7", language:"English, Romanian", time: 60, picture:"https://images.unsplash.com/photo-1464695110811-dcf3903dc2f4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=889&q=80"},
      {_id:"1", title:"Title 3", description:"Description 3", price: 50, numberOfPeople:"2-5/6", language:"English, Spanish", time: 60, picture:"https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"}
    ]
  
  const renderList = info.map((item) =>{
    return (
      <View style={styles.viewStyle}>
        <Text></Text>
        <Text style={styles.roomsText}>{item.title}</Text>
        <Image source={{uri:item.picture}} style={styles.roomsImage}></Image>
        <Text style={styles.roomsText}>{item.description}</Text>
        <Text style={styles.roomsText}>Room Price: {item.roomPrice} lei</Text>
        <Text style={styles.roomsText}>Customers Price: {item.clientPrice} lei/persoana</Text>
        <Text style={styles.roomsText}>Number of players: {item.numberOfPeople}</Text>
        <Text style={styles.roomsText}>Duration: {item.time} min</Text>
        <Text style={styles.roomsText}>Game available in: {item.language}</Text>
        <Text style={styles.roomsText}>Other observations: {item.observation}</Text>
        <Text></Text>
        <Text style={styles.roomsText}>For bookings, please press a date on the aferent calendar! :)</Text>
        <Text></Text>
        <Calendar
          onDayPress={this.onDayPress}
          style={styles.calendar}
          hideExtraDays
          markedDates={{[this.state.selected]: {selected: true}}}
          theme={{
            selectedDayBackgroundColor: '#734d26',
            todayTextColor: '#734d26',
            arrowColor: '#734d26',
                  }}
        />
        <Text></Text>
      </View>
    )
  }
  )
  
  return (
      
      <View style={[styles.container]}>
        <ImageBackground source={require('../assets/main2.jpg')} style={styles.imageStyle}/>
          <View style={styles.logoStyle}>
            <Image source={require('../assets/logo.png')}/>
            <View style={styles.viewButtonStyle}> 
              <ScrollView style={styles.viewBackgroundStyle}>
                <View style={styles.viewStyle}>
                  <ScrollView>
                    {renderList}
                  </ScrollView>
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
  roomsText:{
    fontSize: 20,
    color: "white"
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