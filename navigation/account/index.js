import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'

import AccountScreen from '../../screens/account/AccountScreen'

const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home">
    <Stack.Screen name="Account" component={AccountScreen}
      options={{
        title: 'magdely',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'Ubuntu_700Bold',
          fontSize: 25,
        }
      }} />
  </Stack.Navigator>
)

export default AccountNavigator;