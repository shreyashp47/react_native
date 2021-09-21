import React,{useState,useReducer} from 'react';
import {View, Text,StyleSheet,Button } from 'react-native'


const reducer = (state,action) => {
    return {...state,number: state.number + action.amount }
    
};


const CounterScreen = () => {
       
    const [state, runMyReducer] = useReducer(reducer, { number: 0 })

    const { number } = state;

    const [counter, setCounter] = useState(0)
    return (<View>
        <Button 
        onPress={()=> {
             setCounter(counter+1)
                runMyReducer({ amount: 1 })
        }}
        title='Increase'/>
        <Button 
        onPress={()=> {
           setCounter(counter-1)
                
                runMyReducer({ amount: -1 })
        }}
        title='Decrease'/>

        <Text>
            Counter
            {counter} {state.number}
        </Text>
    </View>);
};

const style=StyleSheet.create({

});

export default CounterScreen;

