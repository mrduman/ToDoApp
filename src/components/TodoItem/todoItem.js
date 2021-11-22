import React from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './todoItem.styles'

export default function TodoItem({ item, pressHandler }) {

    return (

        <TouchableOpacity onPress={() => pressHandler(item.key)}>

            <View style={styles.container}>

                <FontAwesome5 name={'trash-alt'} size={18} />
                <Text style={styles.text}>{item.text}</Text>

            </View>

        </TouchableOpacity>
    )
}

