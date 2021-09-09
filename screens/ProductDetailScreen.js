import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Alert, Dimensions } from 'react-native';

import DeleteModal from '../components/DeleteModal';
import AddModal from '../components/AddModal';
import List from '../components/List';
import OrderListItem from '../components/List/OrderListItem';

const ProductDetailScreen = ({handleNavigation}) => {
    return (
        <View style={styles.container}>
        </View>
    );
}

const styles = StyleSheet.create({
    listTitle: {
        fontSize: 30,
        marginTop: 16,
        marginHorizontal: 16,
        fontFamily: 'Ubuntu_500Medium'
    },
    button: {
        backgroundColor: '#4EB1F9',
        padding: 16,
        borderRadius: 10
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 16,
        textAlign: 'center'
    },
    containerButton: {
        margin: 16,
        flex: 1
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    container: {
        backgroundColor: '#f2f2f2',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1
    },
});

export default ProductDetailScreen;