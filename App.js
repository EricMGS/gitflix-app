import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import Home from './home';
import Drawer from './drawer';
import Header from './components/Header';
import { 
  StyleSheet, 
  Text, 
  View ,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';

const Tab = createBottomTabNavigator();

function Gists(){

}
function Profile() {

}

export default function App() {
  return (
    <NavigationContainer theme={drawerTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let source;

            if (route.name === 'Repositories') {
              source = require('./assets/repos.png');
            } else if (route.name === 'Gists') {
              source = require('./assets/gists.png');
            } else if(route.name === 'Profile') {
              source = require('./assets/profile.png');
            }

            return <Image source={source} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#DB202C',
          inactiveTintColor: 'white',
        }}
      >
        <Tab.Screen name="Repositories" component={Drawer}/>
        <Tab.Screen name="Gists" component={Gists} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const drawerTheme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: 'white',
  },
}