import React,{useState} from 'react';
import {View, Text,StyleSheet,Button,FlatList } from 'react-native'
import ColorCounter from '../conponents/ColorCounter'

const SquareColorScreen = () => {
    const COLOR_VALUE = 25;
    const [red,setRed]=useState(0);
    const [green,setGreen]=useState(0);
    const [blue,setBlue]=useState(0);
    console.log(red, green, blue)


    const setColor = (color, change) => {
        
        switch (color) {        
            case 'red':
                if (red + change > 255 || red + change < 0) {
                    return;
                } else {
                    setRed(red + change)
                }
                return;
                //eternory expression
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null: setBlue(blue+change)
                return;
        
            case 'green':
                green + change > 255 || green + change < 0 ? null: setGreen(green+change)
                return;
               
            default:
                return;
        }
    };

    return (
        <View>
            <ColorCounter 
                onIncrease={() => {
                    setColor('red', COLOR_VALUE)
            }} 
                onDecrease={() => {
                    setColor('red', -1 * COLOR_VALUE)
            }}
            color="Red" /> 
              
              
            
            <ColorCounter                           
                onIncrease={() => {
                    setColor('blue', COLOR_VALUE)                                                        
            }} 
            
                onDecrease={() => {
                    setColor('blue', -1 * COLOR_VALUE)
            }} color="Blue"/>
              
              
            <ColorCounter
               
                onIncrease={() => {
                    setColor('green', COLOR_VALUE)
            }} 
            
                onDecrease={() => {
                    setColor('green', -1 * COLOR_VALUE)
            }} color="Green"/>


            <View style={{
                height: 150,
                width: 150, 
                backgroundColor: `rgb(${red},${blue},${green})`
            }} ></View>
        </View>
        
    )
}

 
const style=StyleSheet.create({

});

export default SquareColorScreen;


