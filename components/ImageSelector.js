import React, { useState } from "react"
import { View, Button, Image, Text, StyleSheet, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

const permissionsEnum = { 
    camera: 'Camera',
    file: 'File'
};

const ImageSelector = props => {
    const [pickedUri, setPickedUri] = useState()
    const handleTakeImage = async () => {
        const isCameraOK = await verifyPermissions(permissionsEnum.camera)
        if(!isCameraOK) return

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.8
        })
        console.log(image.uri)
        setPickedUri(image.uri)
        props.onImage(image.uri)
    }

    const verifyPermissions = async (type) => {
        var status = 'error'

        switch(type){
            case permissionsEnum.camera:
                await ImagePicker.requestCameraPermissionsAsync().then(result => status = result.status)
            case permissionsEnum.file:
                console.log('in file')
                await ImagePicker.requestMediaLibraryPermissionsAsync().then(result => status = result.status)
        }

        if(status !== 'granted'){
            Alert.alert(
                'Permisos insuficientes',
                "Necesita dar permisos para usar esta caracteristica la aplicación",
                [{text: 'Ok'}]
            )
            return false
        }

        return true
    }

    const handleSelectImage = async () => {
        const isCameraOK = await verifyPermissions(permissionsEnum.file)
        if(!isCameraOK) return

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.8,
          })

          console.log(result)

          if (!result.cancelled) {
              console.log(result.uri)
                setPickedUri(result.uri)
                props.onImage(result.uri)
          }
    }

    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickedUri 
                ? <Text>No hay imagen...</Text>
                : <Image style={styles.image}
                    source={{ uri: pickedUri }}/> }
            </View>
            <View style={{flexDirection: 'row'}}>
                <Button
                    title='Tomar foto'
                    onPress={handleTakeImage}
                />
                <Button title='Seleccionar Galeria' 
                    onPress={handleSelectImage}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    preview: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1
    },
    image: {
        width: '100%',
        height: '100%'
    } 
})

export default ImageSelector