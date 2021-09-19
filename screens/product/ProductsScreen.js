import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import ProductListItem from '../../components/List/ProductListItem'
import List from '../../components/List';

const ProductsScreen = ({ navigation }) => {
    const [itemList, setItemList] = useState([
        {
            id: 1,
            imageSource: 'https://www.hola.com/imagenes/cocina/noticiaslibros/20210528190401/dia-internacional-hamburguesa-recetas-2021/0-957-454/dia-hamburguesa-m.jpg',
            name: 'Hamburguesa',
            stock: 1,
            price: 200.00
        },
        {
            id: 2,
            imageSource: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/04/pizzapepperoni0.jpg',
            name: 'Pizza',
            stock: 3,
            price: 400.00
        },
        {
            id: 3,
            imageSource: 'https://cdn2.cocinadelirante.com/sites/default/files/images/2020/06/papas-fritas-con-maicena-facil.jpg',
            name: 'Papas Fritas',
            stock: 2,
            price: 350.00
        },
    ]);

    const [addModalIsVisible, setAddModalIsVisible] = useState(false);
    const [modalIsVisible, setModalIsVisible] = useState(false);


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

    const handleAddOrder = (name, stock, price) => {
        console.log(name, stock, price);
        console.log(itemList);

        if (!name) {
            return;
        }

        setAddModalIsVisible(false);

        setItemList([...itemList,
        {
            name: name,
            stock: stock,
            price: price,
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

    const [seletedItem, setSeletedItem] = useState({});
    return (
        <View style={styles.container}>
            {/* <View style={styles.topBarContainer}>
                <Icon name='bell'
                    type='font-awesome-5'
                    color='#000' />
                <Text style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                }}>magdely</Text>
                <Icon name='user'
                    type='font-awesome-5'
                    color='#000' />
            </View> */}

            <Text style={styles.listTitle}>Mis Productos</Text>

            <List itemList={itemList} Item={ProductListItem} />

            {/* <DeleteModal handleCancelModal={handleCancelModal} handleConfirmDelete={handleConfirmDelete} itemSeleted={seletedItem} modalIsVisible={modalIsVisible} />
            <AddModal handleCancelModal={handleCancelModal} modalIsVisible={addModalIsVisible} handleAddOrder={handleAddOrder} /> */}


            <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={{...styles.containerButton, flex: 1}} onPress={() => handleAddModelOpen()}>

                    <View style={[styles.button, styles.shadow]}>
                        <Text style={styles.buttonText}>Agregar Producto</Text>
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
        margin: 16
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
    topBarContainer: {
        flexDirection: 'row',
        padding: 16,
        justifyContent: 'space-around',
        borderBottomColor: '#BEBEBE',
        borderBottomWidth: 1,
        alignItems: 'center'
    },
    container: {
        backgroundColor: '#f2f2f2',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1
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
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    itemPrice: {
        fontSize: 18,
        opacity: .6
    }
});

export default ProductsScreen;