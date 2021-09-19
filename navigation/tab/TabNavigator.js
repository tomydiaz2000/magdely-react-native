import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import { Icon } from 'react-native-elements';
import ProductNavigator from '../product';
import OrderNavigator from '../order';

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => (
  <BottomTabs.Navigator screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Orders') {
        iconName = focused ? 'clipboard' : 'clipboard-outline';
      } else if (route.name === 'Products') {
        iconName = focused ? 'cube' : 'cube-outline';
      }

      return <Icon name={iconName}
        type='ionicon'
        size={size}
        color={color} />
    }
  })}>
    <BottomTabs.Screen name="Orders" component={OrderNavigator}
      options={{ headerShown: false, title: 'Pedidos' }} />
    <BottomTabs.Screen name="Products" component={ProductNavigator}
      options={{ headerShown: false, title: 'Productos' }} />
  </BottomTabs.Navigator>
)

export default TabNavigator;