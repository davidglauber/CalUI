import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, useWindowDimensions, FlatList } from 'react-native';
import { DigitContext } from '../providers/digit';

export default function OperatorsAndNumbers() {
    const { width, height } = useWindowDimensions();
    const { initialValue, setInitialValue, operatorContext, setOperatorContext } = React.useContext(DigitContext); //this method calls the data of context and retrieve in this page
    const [ arrayNumbers, setArrayNumbers ] = useState<Array<number>>([]);
    const [ steps, setSteps ] = useState(0);

    //step 0: colocar o primeiro numero nao importa o tamanho
    //step 1: operador, ao ser clicado, passar o valor dos numeros para outra variavel

    const digitsArray = [
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
            }
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


    useEffect(() => {
        function SetStep() {
            setSteps(1)
        }

        SetStep()
    }, [operatorContext])
    
    
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
    
    
    function handleEquation(number: string) {
        if(initialValue.includes('Type here...')) {
            setInitialValue(number)
        }
        
        if(initialValue.includes('0')) {
            setInitialValue(initialValue + number);
        }

        if(initialValue.includes('1')) {
            setInitialValue(initialValue + number);
        }

        if(initialValue.includes('2')) {
            setInitialValue(initialValue + number);
        }

        if(initialValue.includes('3')) {
            setInitialValue(initialValue + number);
        }

        if(initialValue.includes('4')) {
            setInitialValue(initialValue + number);
        }

        if(initialValue.includes('5')) {
            setInitialValue(initialValue + number);
        }

        if(initialValue.includes('6')) {
            setInitialValue(initialValue + number);
        }

        if(initialValue.includes('7')) {
            setInitialValue(initialValue + number);
        }

        if(initialValue.includes('8')) {
            setInitialValue(initialValue + number);
        }

        if(initialValue.includes('9')) {
            setInitialValue(initialValue + number);
        }

        console.log('VALORES: ' + initialValue)
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
                            <TouchableOpacity onPress={() => handleEquation(item.title)} style={styles.numbersStyle}>
                                <Text style={styles.specialCharStyle}>{item.title}</Text>
                            </TouchableOpacity>
                        }

                        {item.type == "erase" &&
                            <TouchableOpacity onPress={() => setInitialValue('Type here...')} style={{width: 155, padding:30, 
                                maxWidth: width/1.5, 
                                maxHeight: height/9,
                                marginLeft: 20, 
                                backgroundColor:'#4D463D',
                                borderRadius:40, 
                                marginVertical:10,
                                elevation:20}}
                            >
                                <Text style={styles.specialCharStyle}>  Clean</Text>
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
                            <TouchableOpacity onPress={() => setOperatorContext(item.title)} style={{padding:30, maxWidth: width/5, maxHeight: height/9, backgroundColor:'#48345D', borderRadius:40, elevation:10}}>
                                <Text style={{color:'#BD87ED', fontSize: 26}}>{item.title}</Text>
                            </TouchableOpacity>
                        }

                        {item.type == "operators" &&
                            <TouchableOpacity onPress={() => setOperatorContext(item.title)} style={styles.operationsChar}>
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