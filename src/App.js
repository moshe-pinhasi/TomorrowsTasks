import 'react-native-gesture-handler';
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { SafeAreaProvider} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

// import {HomeScreen, NewListScreen, SettingsScreen} from './router/tabs.js'
import {HomeScreen} from './screens/HomeScreen'
import {SettingsScreen} from './screens/SettingsScreen'
import {NewListScreen} from './screens/NewListScreen'

import Colors from './config/colors'

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
              // tabBarLabel:() => {return null},
              tabBarLabel: 'Home',
              // tabBarLabel: '',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name={'ios-information-circle'} size={size} color={color} />
              )
            }}/>

          <Tab.Screen 
            name="New" 
            component={NewListScreen} 
            options={{
              // tabBarLabel:() => {return null},
              tabBarLabel: 'New',
              // tabBarLabel: '',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name={'ios-add-circle'} size={size} color={Colors.primary} />
              )
            }}
            />
          <Tab.Screen 
            name="Settings" 
            component={SettingsScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name={'ios-list'} size={size} color={color} />
              )
            }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App

