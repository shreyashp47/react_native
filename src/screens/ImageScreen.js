import React from 'react';
import {Text,StyleSheet,View} from 'react-native';
import ImageDetails from '../conponents/ImageDetails'
const ImageScreen=()=> {
    return(
    <View>
    <ImageDetails titles='hi'></ImageDetails>
        <ImageDetails 
        titles='BEACH'
        imageScore='2'
        imageSource={require('../../assets/beach.jpg')} 
        ></ImageDetails>
        <ImageDetails 
        titles='Forest'
        imageScore='32'
        imageSource={require('../../assets/forest.jpg')}
        ></ImageDetails>
        <ImageDetails
         titles='Mountain'
         imageScore='2'
         imageSource={require('../../assets/mountain.jpg')}
        ></ImageDetails>
        
    </View>
    );
}

const styles=StyleSheet.create({

});

export default ImageScreen;