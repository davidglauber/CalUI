import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function main() {
  const { width, height } = useWindowDimensions();
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
        <View style={{flex:1, backgroundColor: '#3B3B3B', elevation:3, paddingTop: height/8, borderRadius: 30, margin: 20, marginTop: height/15}}>
            <></>
        </View>
            <View style={{flexDirection: 'row'}}> 
                <View style={{flexDirection: 'row', flexWrap: 'wrap', maxWidth: width/1.3}}> 
                    <TouchableOpacity style={styles.operators}>
                        <Text style={{color:'#A88546', fontSize: 26}}>C</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.operators}>
                        <Text style={{color:'#A88546', fontSize: 26}}>(</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.operators}>
                        <Text style={{color:'#A88546', fontSize: 26}}>)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.operators}>
                        <Text style={{color:'#A88546', fontSize: 26}}>√</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.operators}>
                        <Text style={{color:'#A88546', fontSize: 26}}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.operators}>
                        <Text style={{color:'#A88546', fontSize: 26}}>±</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.numbersStyle}>
                        <Text style={{color:'#A88546', fontSize: 26}}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numbersStyle}>
                        <Text style={{color:'#A88546', fontSize: 26}}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numbersStyle}>
                        <Text style={{color:'#A88546', fontSize: 26}}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numbersStyle}>
                        <Text style={{color:'#A88546', fontSize: 26}}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numbersStyle}>
                        <Text style={{color:'#A88546', fontSize: 26}}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numbersStyle}>
                        <Text style={{color:'#A88546', fontSize: 26}}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numbersStyle}>
                        <Text style={{color:'#A88546', fontSize: 26}}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numbersStyle}>
                        <Text style={{color:'#A88546', fontSize: 26}}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numbersStyle}>
                        <Text style={{color:'#A88546', fontSize: 26}}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numbersStyle}>
                        <Text style={{color:'#A88546', fontSize: 26}}>.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numbersStyle}>
                        <Text style={{color:'#A88546', fontSize: 26}}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numbersStyle}>
                        <Text style={{color:'#A88546', fontSize: 26}}>X</Text>
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
    </LinearGradient>
  );
}

