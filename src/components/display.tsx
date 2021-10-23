import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, useWindowDimensions, TouchableOpacity } from 'react-native';
import { DigitContext } from '../providers/digit';

export default function Display() {
const { width, height } = useWindowDimensions();

const { initialValue, setInitialValue, secondValue, setSecondValue, operatorContext, setOperatorContext } = useContext(DigitContext);

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
        fontSize:50, 
        color:"white",
        marginTop: height/20
    }
})

function equalFunction() {
    let sum = 5 + 15
    setInitialValue(sum)

    if(operatorContext == "x") {
        let multiple = 0
    }
}

    useEffect(() => {
        console.log('ARRAY: ' + initialValue)
    }, [initialValue])

    useEffect(() => {
        console.log('ARRAY SECOND NUMBER: ' + secondValue)
    }, [secondValue])

    console.log('OPERATOR:' + operatorContext)
    
    return(
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                <Text style={styles.displayText}>{secondValue.length == 0 ? initialValue : secondValue}</Text>
                <TouchableOpacity onPress={() => equalFunction()} style={{marginTop: height/12, width: 100, height:50, backgroundColor:'#fff', borderRadius: 30}}
                >
                    <Text style={{alignSelf:'center', marginTop:2, fontWeight:'bold', fontSize:35}}>=</Text>
                </TouchableOpacity>
            </View>
        </View>
    );





}