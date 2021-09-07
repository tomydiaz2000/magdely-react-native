import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import OrdersScreen from '../screens/OrdersScreen';
import ProductsScreen from '../screens/ProductsScreen';

const Tab = createBottomTabNavigator();

const BreadNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Orders" component={OrdersScreen} />
      <Tab.Screen name="Products" component={ProductsScreen} />
    </Tab.Navigator>
  </NavigationContainer>
)

export default BreadNavigator;