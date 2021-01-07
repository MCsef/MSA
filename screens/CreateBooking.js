import React, { useState }from 'react';
import {StyleSheet, Text, View, Dimensions, ScrollView, ImageBackground, Image} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

const CreateBooking = (props) =>{

    const [room, setRoom ] = useState(props.navigation.state.params.bookingRoom)
    const [date, setDate] = useState(props.navigation.state.params.bookingDate.dateString)
    const [hour, setHour] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [numberOfPeople, setNumberOfPeople] = useState("")

    const options = [
        { key: 1, text: 'Choice 1', value: 1 },
        { key: 2, text: 'Choice 2', value: 2 },
        { key: 3, text: 'Choice 3', value: 3 },
      ]

    const submitData = () => {
        fetch("http://192.168.0.153:3000/send-data",{
            method:"post",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                room,
                date,
                hour,
                firstName,
                lastName,
                email,
                phoneNumber,
                numberOfPeople
            })
        }).then(res=>res.json()).then(data=>{
            console.log(data)
        })
    }

    return(
        <View style={[styles.container]}>
        <ImageBackground source={require('../assets/main2.jpg')} style={styles.imageStyle}/>
          <View style={styles.logoStyle}>
            <Image source={require('../assets/logo.png')}/>
            <View style={styles.viewButtonStyle}> 
              <ScrollView style={styles.viewBackgroundStyle}>
                <View>
                    <TextInput label='Room' theme={theme} style={styles.inputStyle} value={room} mode="outlined" onChangeText = {text => setRoom(text)}/>
                    <TextInput label='Date' theme={theme} style={styles.inputStyle} value={date} mode="outlined" onChangeText = {text => setDate(text)}/>
                    <TextInput label='Hour' theme={theme} style={styles.inputStyle} value={hour} mode="outlined" onChangeText = {text => setHour(text)}/>
                    <TextInput label='First Name' theme={theme} style={styles.inputStyle} value={firstName} mode="outlined" onChangeText = {text => setFirstName(text)}/>
                    <TextInput label='Last Name' theme={theme} style={styles.inputStyle} value={lastName} mode="outlined" onChangeText = {text => setLastName(text)}/>
                    <TextInput label='Email' theme={theme} style={styles.inputStyle} value={email} mode="outlined" onChangeText = {text => setEmail(text)}/>
                    <TextInput label='Phone Number' theme={theme} style={styles.inputStyle} value={phoneNumber} keyboardType = "number-pad" mode="outlined" onChangeText = {text => setPhoneNumber(text)}/>
                    <TextInput label='Number Of People' theme={theme} style={styles.inputStyle} value={numberOfPeople} keyboardType = "number-pad" mode="outlined" onChangeText = {text => setNumberOfPeople(text)}/>
                    <Text></Text>
                    <View style={styles.viewStyle}>
                        <View style={styles.buttonStyle}>
                            <Button icon="content-save" mode="contained" theme={theme} onPress={()=>submitData()}>Book</Button>
                        </View>
                    </View>
                    <Text></Text>
                </View>
              </ScrollView>
            </View> 
          </View>  
      </View> 
    );
}

const theme = {
    colors:{
        primary:"#30261d"
    }
}
const styles = StyleSheet.create({
    inputStyle:{
        margin:5
    },
    modalButtonView:{
        flexDirection:"row",
        justifyContent:"space-around",
        padding: 10,
        backgroundColor: "#30261d"
    },
    modalView:{
        position: "absolute",
        bottom: 2,
        width: "100%"
    },
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
    buttonStyle:
    {
        padding: 16,
        width: 200,
        borderRadius: 24,
        alignItems: "center",
        borderWidth: 2,
        borderColor: "white",
        backgroundColor: "#30261d"
    },
    viewStyle:
  {
    justifyContent: "center", 
    alignItems: "center",
  }
})

export default CreateBooking;