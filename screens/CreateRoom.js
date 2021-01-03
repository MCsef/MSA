import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View, Modal} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

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
            <Button icon="upload" mode="contained" theme={theme} onPress={()=>setModal(true)}>
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
                        <Button icon="camera" mode="contained" theme={theme} onPress={()=>console.log("pressed")}>
                            Camera
                        </Button>
                        <Button icon="image" mode="contained" theme={theme} onPress={()=>console.log("pressed")}>
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