import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { DigitContext } from '../providers/digit';


export default function OperatorsAndNumbers() {
    const { width, height } = useWindowDimensions();
    const { initialValue, setInitialValue } = React.useContext(DigitContext);

    const styles = StyleSheet.create({
        numbersStyle: {
            padding:30, 
            maxWidth: width/5, 
            maxHeight: height/9,
            marginLeft: 20, 
            backgroundColor:'#4D463D',
            borderRadius:40, 
            marginVertical:10,
            elevation:20,
        },
        operators: {
            padding:30, 
            maxWidth: width/5, 
            maxHeight: height/9,
            marginLeft: 20, 
            backgroundColor:'#3A3C3E',
            borderRadius:40, 
            marginVertical:10,
            elevation:10
        },
        numsAndSymbolsView: {
            flexDirection: 'row', 
            flexWrap: 'wrap', 
            maxWidth: width/1.3
        },
        specialCharStyle: {
            color:'#A88546', 
            fontSize: 26
        }
    })


    return(
        <View style={{flexDirection: 'row'}}> 
                <View style={styles.numsAndSymbolsView}> 
                    <TouchableOpacity onPress={() => setInitialValue('C')} style={styles.operators}>
                        <Text style={styles.specialCharStyle}>C</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.operators}>
                        <Text style={styles.specialCharStyle}>( </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.operators}>
                        <Text style={styles.specialCharStyle}>) </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.operators}>
                        <Text style={styles.specialCharStyle}>√</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.operators}>
                        <Text style={styles.specialCharStyle}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.operators}>
                        <Text style={styles.specialCharStyle}>±</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.numbersStyle}>
                        <Text style={styles.specialCharStyle}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numbersStyle}>
                        <Text style={styles.specialCharStyle}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numbersStyle}>
                        <Text style={styles.specialCharStyle}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numbersStyle}>
                        <Text style={styles.specialCharStyle}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numbersStyle}>
                        <Text style={styles.specialCharStyle}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numbersStyle}>
                        <Text style={styles.specialCharStyle}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numbersStyle}>
                        <Text style={styles.specialCharStyle}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numbersStyle}>
                        <Text style={styles.specialCharStyle}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numbersStyle}>
                        <Text style={styles.specialCharStyle}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numbersStyle}>
                        <Text style={styles.specialCharStyle}>.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numbersStyle}>
                        <Text style={styles.specialCharStyle}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numbersStyle}>
                        <Text style={styles.specialCharStyle}>X</Text>
                    </TouchableOpacity>
                    
                    


                

                    <StatusBar style="auto" />
                </View>

                <View style={{flexDirection:'column'}}>
                    <TouchableOpacity style={{padding:30, maxWidth: width/5, maxHeight: height/9, backgroundColor:'#48345D', borderRadius:40, elevation:10}}>
                        <Text style={{color:'#BD87ED', fontSize: 26}}>x</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding:30, maxWidth: width/5, maxHeight: height/9, marginTop:20, backgroundColor:'#48345D', borderRadius:40, elevation:10}}>
                        <Text style={{color:'#BD87ED', fontSize: 26}}>÷</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding:30, maxWidth: width/5, maxHeight: height/9, marginTop:20, backgroundColor:'#48345D', borderRadius:40, elevation:10}}>
                        <Text style={{color:'#BD87ED', fontSize: 26}}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding:30, maxWidth: width/5, maxHeight: height/9, marginTop:20, backgroundColor:'#48345D', borderRadius:40, elevation:10}}>
                        <Text style={{color:'#BD87ED', fontSize: 26}}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding:30, maxWidth: width/5, height: height/3.9, justifyContent:"center", marginTop:20, backgroundColor:'#48345D', borderRadius:40, elevation:10}}>
                        <Text style={{color:'#BD87ED', fontSize: 26}}>=</Text>
                    </TouchableOpacity>
                </View>
            </View>
    );
}