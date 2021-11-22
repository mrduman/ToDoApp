import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import styles from './AddTodo.styles'


export default function AddTodo({submitHandler}) {

    const [text, setText] = useState('')

    const changeHandler = (value) => {
        setText(value)
    }

    return (
        <View style = {styles.container}>

            <TextInput style = {styles.input}  onChangeText = {changeHandler} placeholder = 'new todo...'/>
            <Button onPress ={() => submitHandler(text)} title = 'Add Todo' color = {'coral'}/>

        </View>
    )
}

