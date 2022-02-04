import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';

const Header = ({navigation}) => {
    const openMenu =  ()=>{
        navigation.openDrawer();
    }
    return (
        <View style={styles.header} >
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icons} />
            <View >
                <Text style={styles.headerText} >GameZone</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:"#efafe",
        width:"100%",
        height:"100%",
        flexDirection:'row',
        justifyContent:'row',
        alignItems:"center",
        color:"white"
    },
    headerText:{
        color:"white",
        fontSize:"20px",
        letterSpacing:1

    },
    icons:{
        color:"white",
        marginRight:20
    }
})

export default Header;
