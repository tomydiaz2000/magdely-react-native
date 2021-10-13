import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import OrdersScreen from '../../screens/order/OrdersScreen';
import OrderDetailScreen from '../../screens/order/OrderDetailScreen';

const Stack = createNativeStackNavigator();

const OrderNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="List" component={OrdersScreen}
      options={{
        title: 'magdely',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'Ubuntu_700Bold',
          fontSize: 25,
        }
      }} />
    <Stack.Screen name="Details" component={OrderDetailScreen} />
  </Stack.Navigator>
)

export default OrderNavigator;