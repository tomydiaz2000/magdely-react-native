import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Alert, Dimensions } from 'react-native';

import DeleteModal from '../components/DeleteModal';
import AddModal from '../components/AddModal';
import List from '../components/List';
import OrderListItem from '../components/List/OrderListItem';

import { useSelector, useDispatch, connect} from 'react-redux';

const OrdersScreen = ( { navigation } ) => {
    const [itemList, setItemList] = useState(ORDER_LIST);

    const [addModalIsVisible, setAddModalIsVisible] = useState(false);
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [seletedItem, setSeletedItem] = useState({});


    const handleModalOpen = id => {
        setSeletedItem(itemList.find(x => x.id === id))
        setModalIsVisible(true);
    };

    const handleConfirmDelete = () => {
        const id = seletedItem.id;
        setItemList(itemList.filter(item => item.id !== id));
        setModalIsVisible(false);
        setSeletedItem({});
    };

    const handleItemSeleted = id => {
        navigation.navigate('Details', { id: id });
    }

    const handleAddOrder = (name, cant, price) => {
        console.log(name, cant, price);
        console.log(itemList);

        if (!name) {
            return;
        }

        setAddModalIsVisible(false);

        setItemList([...itemList,
        {
            name: name,
            cant: cant,
            price: price * cant,
            id: itemList[itemList.length - 1].id + 1,
            imageSource: 'http://4.bp.blogspot.com/-1PPIpuTPnPY/UCudijf1DPI/AAAAAAAABgY/Ohzq0co9uyk/s1600/generic.jpg'
        }]);

        Alert.alert(
            'Producto Agregado',
            'Nombre: ' + name.text,
            [
                { text: "OK", onPress: () => console.log('OK') }
            ]
        );
    };

    const handleCancelModal = () => {
        if (modalIsVisible) {
            setSeletedItem({});
            setModalIsVisible(false);
        }
        else if (addModalIsVisible) {
            setAddModalIsVisible(false);
        }
    };

    const handleAddModelOpen = () => {
        setAddModalIsVisible(true);
    };


    return (
        <View style={styles.container}>
            <Text style={styles.listTitle}>Mis Pedidos</Text>

            <List itemList={itemList} handleItemSeleted={handleItemSeleted} Item={OrderListItem} />

            <DeleteModal handleCancelModal={handleCancelModal} handleConfirmDelete={handleConfirmDelete} itemSeleted={seletedItem} modalIsVisible={modalIsVisible} />
            <AddModal handleCancelModal={handleCancelModal} modalIsVisible={addModalIsVisible} handleAddOrder={handleAddOrder} />
            
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.containerButton} onPress={() => handleAddModelOpen()}>

                    <View style={[styles.button, styles.shadow]}>
                        <Text style={styles.buttonText}>Agregar Pedido</Text>
                    </View>
                </TouchableOpacity>
            </View>
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

export default OrdersScreen;