import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const List = (props) => {
    const {itemList, handleItemSeleted, Item} = props;
    return (
        <FlatList data={itemList}
        marginTop={8}
        keyExtractor={(item) => item.id.toString()}
        renderItem={
            data => (
                <Item handleItemSeleted={handleItemSeleted} item={data.item}/>
            )}>
    </FlatList>
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

export default List;