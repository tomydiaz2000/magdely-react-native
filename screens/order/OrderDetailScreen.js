import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { useSelector } from 'react-redux';

const OrdersDetailScreen = ({ navigation }) => {
    // const { id } = route.params;
    
    const orderID = useSelector(state => state.orders.seletedID);
    const orders = useSelector(state => state.orders.orders);
    const order = orders.find(x => x.id === orderID);

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: order.imageSource }}
                    style={styles.tinyLogo} />
            </View>
            <View style={styles.dataContainer}>
                <Text style={styles.title}>{order.name}</Text>

                <View style={styles.separator} />

                <View style={styles.rowContainer}>
                    <Text style={styles.placeholderTitle}>Fecha</Text>
                    <Text style={styles.infoLabel}>04/11/2021</Text>
                    <Text style={styles.placeholderTitle}>Hora</Text>
                    <Text style={styles.infoLabel}> 14:35 hs.</Text>
                </View>

                <View style={styles.separator} />

                <View style={styles.rowContainer}>
                    <Text style={styles.placeholderTitle}>Cant.</Text>
                    <Text style={styles.infoLabel}>{order.cant}</Text>
                    <Text style={styles.placeholderTitle}>Precio</Text>
                    <Text style={styles.infoLabel}> $ {order.price} </Text>
                </View>

                <View style={styles.separator} />
                
                <View style={{margin: 8}}>
                    <Text style={styles.placeholderTitle}>Observaciones</Text>
                    <Text style={{...styles.infoLabel, marginTop: 8}}>(Texto Ejemplo) Hamburguesas sin tomate con papas sin sal. Extra Cheddar.</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 16
    },
    placeholderTitle: {
        fontSize: 18,
        opacity: .6
    },
    infoLabel: {
        fontSize: 18,
    },
    separator: {
        height: 2,
        width: '100%',
        backgroundColor: '#000',
        opacity: .1
    },
    title: {
        fontSize: 30,
        fontFamily: 'Ubuntu_500Medium',
        marginBottom: 8
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
        justifyContent: 'flex-start',
        flex: 1
    },
    tinyLogo: {
        width: '100%',
        height: '100%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    imageContainer: {
        height: '35%',
    },
    dataContainer: {
        borderRadius: 10,
        margin: 16,
        padding: 8,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    }
});

export default OrdersDetailScreen