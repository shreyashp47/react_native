import React,{useReducer} from 'react';
import {View, Text,StyleSheet,Button,FlatList } from 'react-native'
import ColorCounter from '../conponents/ColorCounter'


const reducer = (state, action) => {
    //state === { red:number, green:number, blue:number}
    //actio === { color to change 'red' || 'green' || 'blue'}

    switch (action.colorToChange) {
        case 'change_red':
          return  state.red + action.amount > 255 || state.red + action.amount < 0
            ? state 
            :  { ...state, red: state.red + action.amount };
        case 'change_green':
        
            return state.green + action.amount > 255 || state.green + action.amount < 0
            ? state 
            :  { ...state, green: state.green + action.amount };
        case 'change_blue':
  
            return state.blue + action.amount > 255 || state.blue + action.amount < 0
            ? state 
                      : { ...state, blue: state.blue + action.amount };
        
        default:
            return state;
                
                
    }

};
const COLOR_VALUE = 25;
    

const SquareColorScreen = () => {
    const [state, runMyReducer] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
    const {red,green,blue} = state
    

    return (
        <View>
            <ColorCounter 
                onIncrease={() => {
                     runMyReducer({colorToChange: 'change_red', amount:  COLOR_VALUE })
            }} 
                onDecrease={() => {
                     runMyReducer({colorToChange: 'change_red', amount:-1*COLOR_VALUE })
                    
            }}
            color="Red" /> 
              
              
            
            <ColorCounter                           
                onIncrease={() => {
                     runMyReducer({colorToChange: 'change_blue',amount:COLOR_VALUE })

                     }} 
            
                onDecrease={() => {
                     runMyReducer({colorToChange: 'change_blue',amount:-1*COLOR_VALUE })
                    
            }} color="Blue"/>
              
              
            <ColorCounter
               
                onIncrease={() => {
                     runMyReducer({colorToChange: 'change_green',amount:COLOR_VALUE })

                    
            }} 
            
                onDecrease={() => {
                     runMyReducer({colorToChange: 'change_green',amount:-1*COLOR_VALUE })
                    
            }} color="Green"/>


            <View style={{
                height: 150,
                width: 150, 
                backgroundColor: `rgb(${state.red},${state.blue},${state.green})`
            }} ></View>
        </View>
        
    )
}

 
const style=StyleSheet.create({

});

export default SquareColorScreen;


