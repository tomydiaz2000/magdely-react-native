import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import OrdersScreen from '../screens/OrdersScreen';
import OrderDetailScreen from '../screens/OrderDetailScreen';
import ProductsScreen from '../screens/ProductsScreen';

const OrderStack = createNativeStackNavigator();

function OrderStackScreen() {
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen name="Orders" component={OrdersScreen} />
      <OrderStack.Screen name="Details" component={OrderDetailScreen} />
    </OrderStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const BreadNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Orders" component={OrderStackScreen} />
      <Tab.Screen name="Products" component={ProductsScreen} />
    </Tab.Navigator>
  </NavigationContainer>
)

export default BreadNavigator;