import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Alert , TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from "./components/Header/Header";
import TodoItem from "./components/TodoItem/todoItem";
import AddTodo from "./components/AddTodo/AddTodo";



function App() {

  const [todos, setTodos] = useState([
    { text: 'buy coffe', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
     return prevTodos.filter(todo => todo.key != key );
    })

  }

  

  const submitHandler = (text) => {

    if(text.length > 3) {

      setTodos((prevTodos) => {
      return [
        {text: text, key: Math.random().toString()},
        ...prevTodos
      ]
    })
  }  else {
    Alert.alert('OPPS!' , 'Todos must be over 3 chars long' , [
      {text: 'Understood' , onPress : () => console.log('alert closed')}
    ])
  }
    }
    
    

  return (

  
    <TouchableWithoutFeedback onPress = {() => {
      Keyboard.dismiss();  
      console.log('dismissed Keyboard')
    }}>

    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
         <AddTodo submitHandler = {submitHandler}/>
        <View style={styles.list}>

          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler = {pressHandler}/>
            )}
          />

        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

export default App;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex :1,
  },
  list: {
    marginTop: 20,
    flex:1,
  },

})