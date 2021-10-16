import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, useWindowDimensions, FlatList } from 'react-native';
import { DigitContext } from '../providers/digit';


export default function OperatorsAndNumbers() {
    const { width, height } = useWindowDimensions();
    const { initialValue, setInitialValue } = React.useContext(DigitContext); //this method calls the data of context and retrieve in this page

    const digitsArray = [
            {
                title: 'C',
                type: 'specialChar'
            },
            {
                title: '( ',
                type: 'specialChar'
            },
            {
                title: ') ',
                type: 'specialChar'
            },
            {
                title: '√',
                type: 'specialChar'
            },
            {
                title: '%',
                type: 'specialChar'
            },
            {
                title: '±',
                type: 'specialChar'
            },




            {
                title: '1',
                type: 'normalChar'
            },
            {
                title: '2',
                type: 'normalChar'
            },
            {
                title: '3',
                type: 'normalChar'
            },
            {
                title: '4',
                type: 'normalChar'
            },
            {
                title: '5',
                type: 'normalChar'
            },
            {
                title: '6',
                type: 'normalChar'
            },
            {
                title: '7',
                type: 'normalChar'
            },
            {
                title: '8',
                type: 'normalChar'
            },
            {
                title: '9',
                type: 'normalChar'
            },
            {
                title: '0',
                type: 'normalChar'
            },
            {
                title: 'X',
                type: 'erase'
            },


            {
                title: 'x',
                type: 'operators'
            },
            {
                title: '÷',
                type: 'operators'
            },
            {
                title: '-',
                type: 'operators'
            },
            {
                title: '+',
                type: 'operators'
            },
            {
                title: '=',
                type: 'operators'
            },
        ];

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


    function makeid(length: number) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }
    


    return(
        <View style={{flexDirection: 'row'}}> 
            <FlatList
                data={digitsArray}
                numColumns={3}
                keyExtractor={item => makeid(10)}
                renderItem={({item}) => (
                    <View style={styles.numsAndSymbolsView}>
                        {item.type == "specialChar" &&
                            <TouchableOpacity onPress={() => setInitialValue(item.title)} style={styles.operators}>
                                <Text style={styles.specialCharStyle}>{item.title}</Text>
                            </TouchableOpacity>
                        }

                        {item.type == "normalChar" &&
                            <TouchableOpacity onPress={() => setInitialValue(item.title)} style={styles.numbersStyle}>
                                <Text style={styles.specialCharStyle}>{item.title}</Text>
                            </TouchableOpacity>
                        }

                        {item.type == "erase" &&
                            <TouchableOpacity onPress={() => setInitialValue('Type here...')} style={styles.numbersStyle}>
                                <Text style={styles.specialCharStyle}>X</Text>
                            </TouchableOpacity>
                        }
                    
                    </View>
                    )} />
                    
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
                    <StatusBar style="auto" />
        </View>
    );
}