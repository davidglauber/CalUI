import React from "react";
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

interface TypeDisplay {
    number: number
}

export default function Display({number}: TypeDisplay) {
const { height } = useWindowDimensions();

const styles = StyleSheet.create({
    container: {
        flex:1, 
        backgroundColor: '#3B3B3B',
        elevation:3, 
        paddingTop: height/8,
        borderRadius: 30, 
        margin: 20, 
        marginTop: height/15
    },
    subcontainer: {
        justifyContent:'flex-end', 
        alignItems:'center'
    },
    displayText: {
        fontWeight:'bold', 
        fontSize:30, 
        color:"white",
        marginBottom: height/17
    }
})


    return(
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                <Text style={styles.displayText}>{number}</Text>
            </View>
        </View>
    );





}