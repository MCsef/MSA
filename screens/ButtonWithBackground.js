import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const buttonWithBackground = props => {
    const content = (
        <View style={[styles.button, {backgroundColor: props.color}]}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
    return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
}

const styles = StyleSheet.create({
    button:
    {
        padding: 16,
        width: 200,
        borderRadius: 24,
        alignItems: "center",
        borderWidth: 2,
        borderColor: "white"
    },
    text:
    {
        color: "white",
        textAlign: "center",
    }
})

export default buttonWithBackground;