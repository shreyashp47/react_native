import React from 'react';
import {Text,StyleSheet,View} from 'react-native';
import { color } from 'react-native-reanimated';

const ComponentScreen =()=>{
const name="Shreyash"


return(
    <View>

     <Text style={styles.textStyle}>Getting Started with react native!</Text>
     <Text style={styles.textStyle2}>My name is {name}</Text>  
    </View>
);
} ;

const styles = StyleSheet.create({

    textStyle:{
        fontSize:45
    },
    textStyle2:{
        fontSize:20
    }
    
});


export default ComponentScreen;