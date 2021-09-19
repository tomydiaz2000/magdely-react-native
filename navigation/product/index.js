import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import ProductsScreen from '../../screens/product/ProductsScreen';
import ProductDetailScreen from '../../screens/product/ProductDetailScreen';

const Stack = createNativeStackNavigator;

const ProductNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="List" component={ProductsScreen}
      options={{
        title: 'magdely',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'Ubuntu_700Bold',
          fontSize: 25,
        }
      }} />
    <Stack.Screen name="Details" component={ProductDetailScreen} />
  </Stack.Navigator>
)

export default ProductNavigator;