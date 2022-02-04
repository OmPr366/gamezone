import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator } from "./StackNav";
import ReviewDetails from "../Screens/ReviewDetails";

const Tab = createBottomTabNavigator();


const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" options={{ headerShown: false }} component={MainStackNavigator} />
      <Tab.Screen name="Contact" component={ReviewDetails} />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;
