import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/Header';
import { RootStackParamList, TabParamList } from './types';
type IconName = keyof typeof Ionicons.glyphMap;

import Home from '../screens/Home';
import PreIncidentLinks from '../screens/PreIncidentLinks';
import IndicateTypes from '../screens/IndicateTypes';
import Instructions from '../screens/Instructions';
import Refusals from '../screens/Refusals';
import PersonWithDesability from '../screens/PersonWithDesability';
import AdditionalDetails from '../screens/AdditionalDetails';
import SignOfDanger from '../screens/SignOfDanger';
import MediaFiles from '../screens/MediaFiles';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        header: () => <Header />,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: IconName = 'home';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Links') {
            iconName = focused ? 'link' : 'link-outline';
          } else if (route.name === 'Types') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'More') {
            iconName = focused ? 'menu' : 'menu-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Links" component={PreIncidentLinks} />
      <Tab.Screen name="Types" component={IndicateTypes} />
      <Tab.Screen name="More" component={IndicateTypes} />

    </Tab.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <Header />,
      }}
    >
      <Stack.Screen 
        name="Tabs" 
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Instructions" 
        component={Instructions}
        options={{
          headerShown: true,
          title: 'Instructions'
        }}
      />

      <Stack.Screen 
        name="Refusals" 
        component={Refusals}
        options={{
          headerShown: true,
          title: 'Refusals'
        }}
      />

      <Stack.Screen 
        name="PersonWithDesability" 
        component={PersonWithDesability}
        options={{
          headerShown: true,
          title: 'Person With Disability'
        }}
      />

      <Stack.Screen 
        name="SignOfDanger" 
        component={SignOfDanger}
        options={{
          headerShown: true,
          title: 'Sign of Danger'
        }}
      />

      <Stack.Screen 
        name="AdditionalDetails" 
        component={AdditionalDetails}
        options={{
          headerShown: true,
          title: 'Additional Details and Requests'
        }}
      />

<Stack.Screen 
        name="MediaFiles" 
        component={MediaFiles}
        options={{
          headerShown: true,
          title: 'Media Files'
        }}
      />


    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
