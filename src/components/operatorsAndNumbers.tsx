import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, useWindowDimensions, FlatList } from 'react-native';
import { DigitContext } from '../providers/digit';
import { Sum } from '../operators/index';

export default function OperatorsAndNumbers() {
    const { width, height } = useWindowDimensions();
    const { initialValue, setInitialValue } = React.useContext(DigitContext); //this method calls the data of context and retrieve in this page
    const [ countPressButton, setCountPressButton ] = React.useState(0);


    const digitsArray = [
            {
                id: 1,
                titleNumber: 1,
                type: 'normalChar'
            },
            {
                id: 2,
                titleNumber: 2,
                type: 'normalChar'
            },
            {
                id: 3,
                titleNumber: 3,
                type: 'normalChar'
            },
            {
                id: 4,
                titleNumber: 4,
                type: 'normalChar'
            },
            {
                id: 5,
                titleNumber: 5,
                type: 'normalChar'
            },
            {
                id: 6,
                titleNumber: 6,
                type: 'normalChar'
            },
            {
                id: 7,
                titleNumber: 7,
                type: 'normalChar'
            },
            {
                id: 8,
                titleNumber: 8,
                type: 'normalChar'
            },
            {
                id: 9,
                titleNumber: 9,
                type: 'normalChar'
            },
            {
                id: 0,
                titleNumber: 0,
                type: 'normalChar'
            },
            {
                title: 'X',
                type: 'erase'
            },


            {
                title: 'x',
                type: 'operatorsX'
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
                type: 'operatorsEQUAL'
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
        },
        operationsChar: {
            padding:30, 
            maxWidth: width/5, 
            maxHeight: height/9, 
            marginTop:20, 
            backgroundColor:'#48345D', 
            borderRadius:40, 
            elevation:10
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
    
    
    function handleEquation(number: number | undefined, counter?: number, id?: number) {
        if(counter !== undefined && id !== undefined) {
            setCountPressButton(counter + 1)
            alert(id + '  ' + counter)
        }

        setInitialValue(number)
    }
    
    return(
        <View style={{flexDirection: 'row'}}> 
            <FlatList
                data={digitsArray}
                numColumns={3}
                keyExtractor={item => makeid(10)}
                renderItem={({item}) => (
                    <View style={styles.numsAndSymbolsView}>
                        {/*Aqui são os números de 0 a 9*/}
                        {item.type == "normalChar" &&
                            <TouchableOpacity onPress={() => handleEquation(item.titleNumber, countPressButton, item.id)} style={styles.numbersStyle}>
                                <Text style={styles.specialCharStyle}>{item.titleNumber}</Text>
                            </TouchableOpacity>
                        }

                        {item.type == "erase" &&
                            <TouchableOpacity onPress={() => setInitialValue('Type here...')} style={styles.numbersStyle}>
                                <Text style={styles.specialCharStyle}>X</Text>
                            </TouchableOpacity>
                        }
                    
                    </View>
                    )} />

            <FlatList
                data={digitsArray}
                keyExtractor={item => makeid(10)}
                contentContainerStyle={{flex:1, flexDirection:'column'}}
                renderItem={({item}) => (
                    <View>
                        {item.type == "operatorsX" &&
                            <TouchableOpacity onPress={() => setInitialValue(item.title)} style={{padding:30, maxWidth: width/5, maxHeight: height/9, backgroundColor:'#48345D', borderRadius:40, elevation:10}}>
                                <Text style={{color:'#BD87ED', fontSize: 26}}>{item.title}</Text>
                            </TouchableOpacity>
                        }

                        {item.type == "operators" &&
                            <TouchableOpacity onPress={() => setInitialValue(item.title)} style={styles.operationsChar}>
                                <Text style={{color:'#BD87ED', fontSize: 26}}>{item.title}</Text>
                            </TouchableOpacity>
                        }

                        {item.type == "operatorsEQUAL" &&
                            <TouchableOpacity onPress={() => setInitialValue(item.title)} style={{padding:30, maxWidth: width/5, height: height/3.9, justifyContent:"center", marginTop:20, backgroundColor:'#48345D', borderRadius:40, elevation:10}}>
                                <Text style={{color:'#BD87ED', fontSize: 26}}>{item.title}</Text>
                            </TouchableOpacity>
                        }

                    </View>

                    /*GIT FLOW TESTING*/
                    )} />
                    <StatusBar style="auto" />
        </View>
    );
}