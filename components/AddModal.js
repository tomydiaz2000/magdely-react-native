import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const ModalItem = ({ modalIsVisible, handleCancelModal, handleAddOrder }) => {
    const [cant, setCant] = useState(0);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    return (
        <Modal visible={modalIsVisible} transparent animationType='slide'>
            <View style={styles.modalContainer}>
                <View style={[styles.modelContent, styles.shadow]}>
                    
                    <TextInput placeholder='Nombre' onChangeText={setName}/>

                    <TextInput keyboardType='numeric' placeholder='Cantidad' onChangeText={setCant} />

                    <TextInput placeholder='Precio' keyboardType='numeric' onChangeText={setPrice}/>

                    <TouchableOpacity onPress={() => handleAddOrder(name, cant, price)}>
                        <View backgroundColor='#fff' style={{
                            borderRadius: 10,
                            paddingVertical: 8,
                            paddingHorizontal: 16,
                            alignContent: 'center',
                        }}>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: 'bold'
                            }}>AGREGAR</Text>
                        </View>
                    </TouchableOpacity>
                    <Button title='Cancelar' onPress={() => handleCancelModal()} />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
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
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    modelContent: {
        height: 250,
        padding: 30,
        backgroundColor: '#4EB1F9',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopLeftRadius: 20,
        borderTopEndRadius: 20
    },
});

export default ModalItem;