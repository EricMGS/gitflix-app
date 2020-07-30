import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import Home from './home';
import Header from './components/Header';

import { 
  StyleSheet, 
  Text, 
  View ,
  ScrollView,
  StatusBar,
} from 'react-native';

const Drawer = createDrawerNavigator();

function Initial({navigation}) {
  return (
    <Home>
      <StatusBar hidden/>
      <Header openDrawer={() => navigation.openDrawer()}/>
    </Home>
  );
}

export default function DrawerNav() {
  return (
    <NavigationContainer theme={drawerTheme} independent>
      <Drawer.Navigator initialRoute="Home">
        <Drawer.Screen name="Home" component={Initial} />
      </Drawer.Navigator>
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