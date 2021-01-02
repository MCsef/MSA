import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, Image, ScrollView} from 'react-native';
import {Calendar} from 'react-native-calendars';
 
export default class RoomsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    return (
      <View style={[styles.container]}>
        <ImageBackground source={require('../assets/main2.jpg')} style={styles.imageStyle}/>
          <View style={styles.logoStyle}>
            <Image source={require('../assets/logo.png')}/>
            <View style={styles.viewButtonStyle}> 
              <ScrollView style={styles.viewBackgroundStyle}>
                <View style={styles.viewStyle}>
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