import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Alert, Keyboard , TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import Header from './components/Header/Header'
import TodoItem from './components/TodoItem/todoItem';
import AddTodo from './components/AddTodo/AddTodo';

export default function App() {

  const [todos, setTodos] = useState([

    { text: 'go to shop', key: 0 },
    { text: 'take a coffe', key: 1 },
    { text: 'get money', key: 2 },
    { text: 'make a project', key: 3 },

  ])


  const pressHandler = (key) => {
    setTodos((prevTodos) => {

      return prevTodos.filter(todo => todo.key != key)


    })
  }

    const submitHandler = (text) => {

      if (text.length > 3) {

         setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ] ;
      })

      } else {

        Alert.alert('OPPS!' , 'Todos must be over 3 chars long' , [
          {text : 'Understood' , onPress : () => console.log('alert closed')}
        ])
      }

     
    }
  



  return (

    <TouchableWithoutFeedback onPress = {() => {
      Keyboard.dismiss();
      console.log('dismissed keyboard')
    }}>

    <View style={styles.container}>
      <Header />
      <View style={styles.content}>

        <AddTodo submitHandler={submitHandler} />

        <View style={styles.inner_container}>

          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />

        </View>

      </View>
    </View>
    </TouchableWithoutFeedback>
  )

}

const styles = StyleSheet.create({

  container : {
    flex :1,
    padding :10,
    
  },

  content : {
    flex :1,
   
    
  },

  inner_container: {

    justifyContent: 'center',
   
    top : 20,
    padding :10
   

  }
})