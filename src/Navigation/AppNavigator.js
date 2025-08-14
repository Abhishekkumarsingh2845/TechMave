import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Splash from '../screens/Splash';
import Profile from '../screens/Profile';
import EditProfile from '../screens/EditProfile';
import PunchIn from '../screens/PunchIn';
import Punchout from '../screens/Punchout';
import Scan from '../screens/Scan';
import ClientsScreen from '../screens/Clients';
import PlacedOrder from '../screens/Placedorder';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabs from './BottomTabNavigator';
 // ⬅ import new bottom tab navigator

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />

        {/* Bottom tabs containing Home & Product */}
        <Stack.Screen name="Main" component={BottomTabs} />

        {/* Other screens */}
        <Stack.Screen name="Profile" component={Profile} />
      
        <Stack.Screen name="PunchIn" component={PunchIn} />
        <Stack.Screen name="Punchout" component={Punchout} />
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="ClientsScreen" component={ClientsScreen} />
        <Stack.Screen name="Placedorder" component={PlacedOrder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
