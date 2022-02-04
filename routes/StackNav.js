// ./navigation/StackNavigator.js

import React from "react";
import Home from "../Screens/Home";
import About from "../Screens/About";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../shared/header";


const Stack = createNativeStackNavigator();

const MainStackNavigator = ({navigation}) => {
    return (
      <Stack.Navigator
      
        screenOptions={ {
            
          headerStyle: {
            backgroundColor: "#4dced8",
          },
          headerTintColor: "white",
          headerBackTitle: "Back",
          
        }}
      >
        <Stack.Screen name="Home" options={{ headerTitle : ()=> <Header navigation={navigation} /> }} component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    );
  }

export { MainStackNavigator };