import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import ReviewDetails from "../Screens/ReviewDetails";

// const screens = {
//   Home: {
//     screen: Home,
//   },
//   ReviewDetails: {
//     screen: ReviewDetails,
//   },
// };

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home}    options={{ title: 'Home' , headerStyle:{
        backgroundColor:"#eef4fe"
      } }} />
        <Stack.Screen name="Details" component={ReviewDetails}  options={{ title: 'Details' ,headerStyle:{
            backgroundColor:"#4dced8"
        } }} />
        
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

export default HomeStack;
