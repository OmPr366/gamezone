import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Screens/Home';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Home} />
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
}
export default MyDrawer;
