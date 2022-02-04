import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { MainStackNavigator } from "./routes/StackNav";
import BottomTabNavigator from "./routes/TabNav";
import { DrawerNav } from "./routes/DrawerNav";

 const App = () => {
  return (
    <NavigationContainer>
      <DrawerNav/>
    </NavigationContainer>
  );
}
export default App