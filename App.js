import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Opdracht1 from './opdrachten/Opdracht1';
import Opdracht2 from './opdrachten/Opdracht2';
import Opdracht3 from './opdrachten/Opdracht3';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Opdracht 1" component={Opdracht1} />
        <Tab.Screen name="Opdracht 2" component={Opdracht2} />
        <Tab.Screen name="Opdracht 3" component={Opdracht3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}