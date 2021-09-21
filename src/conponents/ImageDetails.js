import React from 'react';
import {Text,StyleSheet,View,Image} from 'react-native';

const ImageDetails = ({imageSource,titles,imageScore}) => {

    return(
    <View  >
        <Image source={imageSource}/>
        <Text style={styles.textStyle}> {titles}</Text>

        <Text style={styles.textStyle}>Image score - {imageScore}</Text>

    </View>
    );
}

const styles=StyleSheet.create({
    textStyle:{
        fontSize:25,
        margin:5
    },
});

export default ImageDetails;