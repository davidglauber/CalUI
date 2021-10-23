import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, useWindowDimensions, TouchableOpacity } from 'react-native';
import { DigitContext } from '../providers/digit';

export default function Display() {
const { width, height } = useWindowDimensions();
const { initialValue, secondValue, result, setResult, operatorContext } = useContext(DigitContext);

var length = 12;
var trimmedString = initialValue.length > length ? 
                    initialValue.substring(0, length - 3) + "..." : 
                    initialValue;

var secondTrimmedString = secondValue.length > length ? 
                    secondValue.substring(0, length - 3) + "..." : 
                    secondValue;

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
        alignItems:'center',
        padding:15
    },
    displayText: {
        fontWeight:'bold', 
        fontSize:50, 
        color:"white",
        marginTop: height/20
    }
})

function equalFunction() {
    var convert1Value = parseInt(initialValue);
    var convert2Value = parseInt(secondValue);

    if(operatorContext == "x") {
        setResult(convert1Value * convert2Value);
    }

    if(operatorContext == "÷") {
        setResult(convert1Value / convert2Value);
    }

    if(operatorContext == "+") {
        setResult(convert1Value + convert2Value);
    }

    if(operatorContext == "-") {
        setResult(convert1Value - convert2Value);
    }
}

    useEffect(() => {
        console.log('ARRAY: ' + initialValue)
    }, [initialValue])

    useEffect(() => {
        console.log('ARRAY SECOND NUMBER: ' + secondValue)
    }, [secondValue])

    
    return(
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                {result == undefined ?
                    <Text style={styles.displayText}>{secondValue.length == 0 ? trimmedString : secondTrimmedString}</Text>
                :
                    <Text style={styles.displayText}>{result}</Text>
                }

                <TouchableOpacity onPress={() => equalFunction()} style={{marginTop: height/10, width: 100, height:50, backgroundColor:'#fff', borderRadius: 30}}
                >
                    <Text style={{alignSelf:'center', marginTop:2, fontWeight:'bold', fontSize:35}}>=</Text>
                </TouchableOpacity>
            </View>
        </View>
    );





}