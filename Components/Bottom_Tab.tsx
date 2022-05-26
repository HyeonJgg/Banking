import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name='Home' component={HomeScreen} />
      </Tab.Navigator>
    );
  }

  export default MyTabs;