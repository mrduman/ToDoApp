 import React from 'react';
 import {View, Text} from 'react-native'
 import styles from './Header.styles'


 function Header() {

    return(

        <View style = {styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
     
 }

 export default Header;