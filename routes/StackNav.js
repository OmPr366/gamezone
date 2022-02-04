// ./navigation/StackNavigator.js

import React from "react";
import Home from "../Screens/Home";
import About from "../Screens/About";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#4dced8",
          },
          headerTintColor: "white",
          headerBackTitle: "Back",
          headerShown:false
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    );
  }

export { MainStackNavigator };