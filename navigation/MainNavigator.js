import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import { Icon } from 'react-native-elements';

import OrdersScreen from '../screens/OrdersScreen';
import OrderDetailScreen from '../screens/OrderDetailScreen';
import ProductsScreen from '../screens/ProductsScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';

const OrderStack = createNativeStackNavigator();

function OrderStackScreen() {
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen name="List" component={OrdersScreen} options={{
        title: 'magdely',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'Ubuntu_700Bold',
          fontSize: 40,
        }
      }} />
      <OrderStack.Screen name="Details" component={OrderDetailScreen} options={{
        headerShown: false
      }} />
    </OrderStack.Navigator>
  );
}

const ProductStack = createNativeStackNavigator();
function ProductStackScreen() {
  return (
    <ProductStack.Navigator>
      <ProductStack.Screen name="List" component={ProductsScreen}
        options={{
          title: 'magdely',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Ubuntu_700Bold',
            fontSize: 25,
          }
        }} />
      <ProductStack.Screen name="Details" component={ProductDetailScreen} />
    </ProductStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const MainNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={({ route }) => ({
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
      <Tab.Screen name="Orders" component={OrderStackScreen}
        options={{ headerShown: false, title: 'Pedidos' }} />
      <Tab.Screen name="Products" component={ProductStackScreen}
        options={{ headerShown: false, title: 'Productos' }} />
    </Tab.Navigator>
  </NavigationContainer>
)


export default MainNavigator;