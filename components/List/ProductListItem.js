import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ProductListItem = (props) => {
    const { handleItemSeleted, item } = props;
    return (
         <TouchableOpacity onPress={() => handleItemSeleted(item.id)}> 
            <View style={styles.listItem}>
                <Image source={{
                    uri: item.image,
                }}
                    style={styles.tinyLogo} />
                <Text style={styles.itemName}>{item.name}</Text>
                <View>
                    <Text style={styles.itemPrice}>$ {item.price.toString()}</Text>
                    <Text style={styles.itemPrice}>{item.stock.toString()}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    itemName: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    itemPrice: {
        fontSize: 18,
        opacity: .6
    },
    listItem: {
        padding: 16,
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 16,
        marginVertical: 8,
        backgroundColor: '#f2f2f2',

        alignItems: 'center',

        borderRadius: 12,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6
        },
        shadowOpacity: 0.4,
        shadowRadius: 7.5,
        elevation: 12
    },
    tinyLogo: {
        width: 60,
        height: 50,
        borderRadius: 10
    }
});

export default ProductListItem;