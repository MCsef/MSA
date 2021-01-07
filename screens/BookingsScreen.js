import React, { Component, useEffect, useState} from 'react';
import { FlatList, StyleSheet, Text, View, Dimensions, ImageBackground, Image, ActivityIndicator, Button} from 'react-native';
import {Calendar} from 'react-native-calendars';

export default class BookingsScreen extends Component {
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
              <View style={styles.viewBackgroundStyle}>
                <View style={styles.viewStyle}>
                  <FlatList
                  data = {this.state.data}
                  keyExtractor = {(x,i)=>i.toString()}
                  renderItem = {({item})=>
                  <View style={styles.viewStyle}>
                  <Text style={styles.roomsText}>{`${item.title}`}</Text>
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
                  }
                  >
                  </FlatList>
                </View>
              </View>
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