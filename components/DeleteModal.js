import React from 'react';
import { Modal, View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';

const ModalItem = ({modalIsVisible, itemSeleted, handleCancelModal, handleConfirmDelete}) => {
    return (
        <Modal visible={modalIsVisible} transparent animationType='slide'>
            <View style={styles.modalContainer}>
                <View style={[styles.modelContent, styles.shadow]}>
                    <Text style={{
                        fontSize: 20,
                        color: '#fff',
                        fontWeight: 'bold',
                        textAlign:'center'
                    }}>¿Desea eliminar el producto {itemSeleted.name}?</Text>
                    <TouchableOpacity onPress={() => handleConfirmDelete()}>
                        <View backgroundColor='#fff' style={{
                            borderRadius: 10,
                            paddingVertical: 8,
                            paddingHorizontal: 16,
                            alignContent:'center',
                        }}>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: 'bold'
                            }}>ELIMINAR</Text>
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
      modelContent:{
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