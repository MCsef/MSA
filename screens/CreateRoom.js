import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View, Modal, Alert} from 'react-native';
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
        <View style = {styles.root}>
            <TextInput 
                label='Title' 
                theme={theme}   
                style={styles.inputStyle} 
                value={title} 
                mode="outlined" 
                onChangeText = {text => setTitle(text)}/>
            <TextInput 
                label='Description' 
                theme={theme}   
                style={styles.inputStyle} 
                value={description} 
                mode="outlined" 
                onChangeText = {text => setDescription(text)}/>
            <TextInput 
                label='Time' 
                theme={theme}   
                style={styles.inputStyle} 
                value={time} 
                keyboardType = "number-pad"
                mode="outlined" 
                onChangeText = {text => setTime(text)}/>
            <TextInput 
                label='Room Price' 
                theme={theme}   
                style={styles.inputStyle} 
                value={roomPrice} 
                keyboardType = "number-pad"
                mode="outlined" 
                onChangeText = {text => setRoomPrice(text)}/>
            <TextInput 
                label='Client Price' 
                theme={theme}   
                style={styles.inputStyle} 
                value={clientPrice} 
                keyboardType = "number-pad"
                mode="outlined" 
                onChangeText = {text => setClientPrice(text)}/>
            <TextInput 
                label='Team' 
                theme={theme}   
                style={styles.inputStyle} 
                value={team} 
                mode="outlined" 
                onChangeText = {text => setTeam(text)}/>
            <TextInput 
                label='Language' 
                theme={theme}   
                style={styles.inputStyle} 
                value={language} 
                mode="outlined" 
                onChangeText = {text => setLanguage(text)}/>
            <TextInput 
                label='Observation' 
                theme={theme}   
                style={styles.inputStyle} 
                value={observation} 
                mode="outlined" 
                onChangeText = {text => setObservation(text)}/>
            <Button icon={picture==""?"upload":"check"} mode="contained" theme={theme} onPress={()=>setModal(true)}>
                Upload Image
            </Button>
            <Button icon="content-save" mode="contained" theme={theme} onPress={()=>console.log("saved")}>
                Save
            </Button>
            <Modal
            animationType="slide"
            transparent={true}
            visible = {modal}
            onRequestClose={()=>{
                setModal(false)
            }}
            >
                 <View style={styles.modalView}>
                    <View style={styles.modalButtonView}>
                        <Button icon="camera" mode="contained" theme={theme} onPress={()=>picFromCamera()}>
                            Camera
                        </Button>
                        <Button icon="image" mode="contained" theme={theme} onPress={()=>picFromGallery()}>
                            Gallery
                        </Button>
                    </View>
                    <Button theme={theme} onPress={()=>setModal(false)}>
                        Cancel
                    </Button>
                </View>
            </Modal>
        </View>
    )
}

const theme = {
    colors:{
        primary:"#30261d"
    }
}
const styles = StyleSheet.create({
    root:{
        flex:1
    },
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
    }
})

export default CreateRoom;