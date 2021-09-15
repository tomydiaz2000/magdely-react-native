import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image, Alert, SafeAreaView } from 'react-native';
import OrdersScreen from './screens/OrdersScreen';
import ProductsScreen from './screens/ProductsScreen';
import { Icon } from 'react-native-elements';
import AppLoading from 'expo-app-loading';

import MainNavigator from './navigation/MainNavigator';

import {
  useFonts,
  Ubuntu_300Light,
  Ubuntu_300Light_Italic,
  Ubuntu_400Regular,
  Ubuntu_400Regular_Italic,
  Ubuntu_500Medium,
  Ubuntu_500Medium_Italic,
  Ubuntu_700Bold,
  Ubuntu_700Bold_Italic,
} from '@expo-google-fonts/ubuntu';

export default function App() {

  let [fontsLoaded] = useFonts({
    Ubuntu_300Light,
    Ubuntu_300Light_Italic,
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_500Medium,
    Ubuntu_500Medium_Italic,
    Ubuntu_700Bold,
    Ubuntu_700Bold_Italic,
  });

  const [visibleView, setVisibleView] = useState('products');

  let content = <ProductsScreen handleNavigation={handleNavigation} />;

  if (!fontsLoaded) return <AppLoading />;

  console.log(fontsLoaded);

  const handleNavigation = () => {
    if (visibleView === 'products') {
      setVisibleView('orders');
    }
    else {
      setVisibleView('products');
    }
  }

  if (visibleView === 'products') {
    content = <ProductsScreen handleNavigation={handleNavigation} />;
  }
  else {
    content = <OrdersScreen handleNavigation={handleNavigation} />;
  }

  return (
    // <View style={{ flex: 1, paddingTop: 40 }}>
    //   <View style={styles.topBarContainer}>
    //     <Icon name='bell'
    //       type='font-awesome-5'
    //       color='#000' />
    //     <Text style={styles.title}>magdely</Text>
    //     <Icon name='user'
    //       type='font-awesome-5'
    //       color='#000' />
    //   </View>

    //   {content}
    // </View>
    <Provider store={store}>
      <BreadNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 25,
  },
  topBarContainer: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-around',
    borderBottomColor: '#BEBEBE',
    borderBottomWidth: 1,
    alignItems: 'center'
  },
})
