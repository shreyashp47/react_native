import React from 'react';
import {Text,StyleSheet,View,FlatList} from 'react-native';

const ListScreen = ()=> {
const friends =[
  //  {name: 'Friend 1', key: '1'},
    {name: 'Friend 1', age:'23'},
    {name: 'Friend 2', age:'23'},
    {name: 'Friend 3', age:'26'},
    {name: 'Friend 4', age:'23'},
    {name: 'Friend 5', age:'23'},
    {name: 'Friend 6', age:'25'},
    {name: 'Friend 7', age:'22'},
    {name: 'Friend 8', age:'23'},
    {name: 'Friend 9', age:'23'},
    {name: 'Friend 0', age:'23'},
    {name: 'Friend 71', age:'24'}

]
return (
    <FlatList 
    horizontal={false}
    showsHorizontalScrollIndicator={false}
    keyExtractor={(friend)=> 
        friend.name}
    data={friends} 
    renderItem={({item}) => {
     //element is ==={item}

return( 
<Text style={styles.textStype}>{item.name} age - {item.age}</Text>
);
}

}></FlatList>
)
};


const styles = StyleSheet.create(
    {
        textStype:{
            margin:20   
        }

    }
);

export default ListScreen;