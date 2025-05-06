import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

import Home from './Screens/Home';
import Settings from './Screens/Settings';
import Users from './Screens/Users';
import DetailHome from './Screens/DetailHome';
import AnotherDetailHome from './Screens/AnotherDetailHome';

const Drawer = createDrawerNavigator();

function DrawerNavigate() {
  return (
    <Drawer.Navigator initialRouteName="Users">
      <Drawer.Screen name="Users" component={Users} />
      <Drawer.Screen name="DetailHome" component={DetailHome} />
      <Drawer.Screen name="AnotherDetailHome" component={AnotherDetailHome} />
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();

function StackDetailHome() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DetailHome" component={DetailHome} />
      <Stack.Screen name="AnotherDetailHome" component={AnotherDetailHome} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: 'purple',
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={StackDetailHome}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={30} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <AntDesign name="setting" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Drawer"
        component={DrawerNavigate}
        options={{
          tabBarLabel: 'Users',
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navegacion() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
