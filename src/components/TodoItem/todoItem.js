import React from "react";
import {StyleSheet,Text, TouchableOpacity, View} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default function TodoItem({item,pressHandler}) {
    
    return(
        <TouchableOpacity onPress= {() => pressHandler(item.key)}>
            <View style = {styles.item}>

                 <FontAwesome5 name = {'trash-alt'} size = {20}/>
                 <Text style = {styles.text}>{item.text}</Text>
                
            </View>
           
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({

    item : {
        padding : 16,
        marginTop:16,
        borderColor : '#bbb',
        borderWidth :1,
        borderStyle : 'dashed',
        borderRadius : 10,
        flexDirection: 'row',
        
    },
    text : {
        marginLeft :20
    }
})