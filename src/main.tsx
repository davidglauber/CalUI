import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Display from './components/display';
import OperatorsAndNumbers from './components/operatorsAndNumbers';


export default function main() {
  const { width, height } = useWindowDimensions();
  const [numberTyped, setNumberTyped] = useState<number>(0);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    },
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
    }
  });

  
  return (
    <LinearGradient
        // Button Linear Gradient
        colors={['#494D50', '#3C4043', '#1D2125']}
        style={styles.container}>
            <Display number={numberTyped}/>
            <OperatorsAndNumbers/>
    </LinearGradient>
  );
}

