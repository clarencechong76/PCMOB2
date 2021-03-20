import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./screens/HomeScreen";
import EventsScreen from "./screens/EventsScreen";
import ContactScreen from "./screens/ContactScreen";
import FontAwesome from "react-native-vector-icons/FontAwesome";



const Tab = createBottomTabNavigator();

export default function App() {
  return (
<NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'info-circle'
                : 'info';
            } else if (route.name === 'Events') {
              iconName = focused ? 'list-alt' : 'list';

            } else if (route.name === 'Contacts') {
              iconName = focused ? 'phone-square' : 'phone';

            }
            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
            },
          })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Events" component={EventsScreen} />
        <Tab.Screen name="Contacts" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
      }