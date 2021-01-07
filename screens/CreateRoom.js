import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View, Modal, Alert, Dimensions, ScrollView, ImageBackground, Image, KeyboardAvoidingView} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const CreateRoom = () =>{
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [time, setTime] = useState("")
    const [picture, setPicture] = useState("")
    const [roomPrice, setRoomPrice] = useState("")
    const [clientPrice, setClientPrice] = useState("")
    const [language, setLanguage] = useState("")
    const [team, setTeam] = useState("")
    const [observation, setObservation] = useState("")
    const [modal, setModal] = useState(false)

    const submitData = () => {
        fetch("http://192.168.0.153:3000/send",{
            method:"post",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                title, 
                description, 
                time,
                picture,
                roomPrice,
                clientPrice,
                language,
                team,
                observation
            })
        }).then(res=>res.json()).then(data=>{
            Alert.alert(`${data.title} successfully saved`)
        })
    }

    const picFromGallery = async () =>{
        const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if(granted){
            let data = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1,1],
                quality: 0.5
            })
            if(!data.cancelled){
                let newFile = {
                    uri: data.uri,
                    type: `test/${data.uri.split(".")[1]}`,
                    name: `test.${data.uri.split(".")[1]}`
                }
                handleUpload(newFile)
            }
        }else{
            Alert.alert("you need to give up permission to work")
        }
        }

    const picFromCamera = async () =>{
        const {granted} = await Permissions.askAsync(Permissions.CAMERA)
        if(granted){
            let data = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1,1],
                quality: 0.5
                })
            if(!data.cancelled){
                let newFile = {
                    uri: data.uri,
                    type: `test/${data.uri.split(".")[1]}`,
                    name: `test.${data.uri.split(".")[1]}`
                }
                handleUpload(newFile)
            }
        }else{
            Alert.alert("you need to give up permission to work")
        }
       }

    const handleUpload = (image) =>{
        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset', 'roomApp')
        data.append('cloud_name','thecodex')

        fetch("https://api.cloudinary.com/v1_1/thecodex/image/upload",{
            method: "post",
            body: data
        }).then(res=>res.json()).then(data=>{
            setPicture(data.url)
            setModal(false)
        })
    }

    return(
        <KeyboardAvoidingView>
        <View style={[styles.container]}>
        <ImageBackground source={require('../assets/main2.jpg')} style={styles.imageStyle}/>
          <View style={styles.logoStyle}>
            <Image source={require('../assets/logo.png')}/>
            <View style={styles.viewButtonStyle}> 
              <ScrollView style={styles.viewBackgroundStyle}>
                <View>
                    <TextInput label='Title' theme={theme} style={styles.inputStyle} value={title} mode="outlined" onChangeText = {text => setTitle(text)}/>
                    <TextInput label='Description' theme={theme} style={styles.inputStyle} value={description} mode="outlined" onChangeText = {text => setDescription(text)}/>
                    <TextInput label='Time' theme={theme} style={styles.inputStyle} value={time} keyboardType = "number-pad" mode="outlined" onChangeText = {text => setTime(text)}/>
                    <TextInput label='Room Price' theme={theme} style={styles.inputStyle} value={roomPrice} keyboardType = "number-pad" mode="outlined" onChangeText = {text => setRoomPrice(text)}/>
                    <TextInput label='Client Price' theme={theme} style={styles.inputStyle} value={clientPrice} keyboardType = "number-pad" mode="outlined" onChangeText = {text => setClientPrice(text)}/>
                    <TextInput label='Team' theme={theme} style={styles.inputStyle} value={team} mode="outlined" onChangeText = {text => setTeam(text)}/>
                    <TextInput label='Language' theme={theme} style={styles.inputStyle} value={language} mode="outlined" onChangeText = {text => setLanguage(text)}/>
                    <TextInput label='Observation' theme={theme} style={styles.inputStyle} value={observation} mode="outlined" onChangeText = {text => setObservation(text)}/>
                    <Text></Text>
                    <View style={styles.viewStyle}>
                        <View style={styles.buttonStyle}>
                            <Button icon={picture==""?"upload":"check"} mode="contained" theme={theme} onPress={()=>setModal(true)}>Upload Image</Button>
                        </View>
                    </View>
                    <Text></Text>
                    <View style={styles.viewStyle}>
                        <View style={styles.buttonStyle}>
                            <Button icon="content-save" mode="contained" theme={theme} onPress={()=>submitData()}>Save</Button>
                        </View>
                    </View>
                    <Text></Text>
                    <Modal animationType="slide" transparent={true} visible = {modal} onRequestClose={()=>{ setModal(false)}}>
                        <View style={styles.modalView}>
                            <View style={styles.modalButtonView}>
                                <Button style={styles.buttonStyle} icon="camera" mode="contained" theme={theme} onPress={()=>picFromCamera()}>Camera</Button>
                                <Button icon="image" mode="contained" theme={theme} onPress={()=>picFromGallery()}>Gallery</Button>
                            </View>
                            <Button theme={theme} onPress={()=>setModal(false)}>Cancel</Button>
                        </View>
                    </Modal>
                </View>
              </ScrollView>
            </View> 
          </View>  
      </View> 
      </KeyboardAvoidingView>
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

export default CreateRoom;