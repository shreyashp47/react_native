import React from "react";
import { Text, StyleSheet,View,Button,TouchableOpacity, Touchable } from "react-native";

const HomeScreen = ({navigation}) => {
  
  return(<View>

    <Text style={styles.text}>Hello Shreyash</Text>
    <Button   
    onPress={()=> navigation.navigate('Comonents')}
    title='ComponentScreen'/>
    <Button 
    onPress={()=> navigation.navigate('ListScreen')}
    title='ListScreen'/>
    <TouchableOpacity
    onPress={()=> navigation.navigate('ImageScreen')}>
            <Text style={styles.text}>GO TO ImageScreen</Text>

    </TouchableOpacity>
    <Button 
    onPress={()=> navigation.navigate('CounterScreen')}
    title='Counter Screen'/>
    <TouchableOpacity
    onPress={()=> navigation.navigate('ColorScreen')}>
            <Text style={styles.text}>Color Screen</Text>

    </TouchableOpacity>
    <Button 
    onPress={()=> navigation.navigate('SquareColorScreen')}
    title='Square Color Screen'/>
  </View>
  ) ;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    margin:10 
  },
  button: {
    margin:10 
  }
});

export default HomeScreen;
  