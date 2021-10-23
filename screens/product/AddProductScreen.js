import React, { useState, useCallback, useReducer } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
  Dimensions,
  ScrollView,
} from "react-native";
import { Button, Switch, Icon } from "react-native-elements";
import { useDispatch } from "react-redux";
import Input from "../../components/Input";
import { formReducer, FORM_INPUT_UPDATE } from "../auth/formReducer";
import { addProduct } from "../../store/actions/product.action";
import ImageSelector from "../../components/ImageSelector";

const AddProductScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();

  const [isEnabled, setIsEnabled] = useState(false);
  const [imageUri, setImageUri] = useState('');

  const { isEditableParam } = route.params;

  const [isEditable, setIsEditable] = useState(isEditableParam)

  const handlePickImage = (uri) => {
    setImageUri(uri);
  };

  const [formState, formDispatch] = useReducer(formReducer, {
    inputValues: {
      name: "",
      salePrice: "",
      costPrice: "",
      stock: "",
      description: "",
      timePreparation: "",
    },
    inputValidities: {
      name: false,
      salePrice: false,
      costPrice: false,
      stock: false,
      description: false,
      timePreparation: false,
    },
    formIsValid: false,
  });

  const handleSave = () => {
    console.log("Image length: " + imageUri.length)

    // if(imageUri.length === 0) {
    //   console.log('In image 0')
    //   setImageUri('https://i0.wp.com/elfutbolito.mx/wp-content/uploads/2019/04/image-not-found.png?ssl=1')
    //   console.log('new value image: ' + imageUri)
    // }

    if (formState.formIsValid) {
      dispatch(
        addProduct(
          formState.inputValues.name,
          formState.inputValues.description,
          isEnabled,
          formState.inputValues.salePrice,
          formState.inputValues.stock,
          formState.inputValues.costPrice,
          formState.inputValues.timePreparation,
          false,
          !imageUri ? 'https://i0.wp.com/elfutbolito.mx/wp-content/uploads/2019/04/image-not-found.png?ssl=1' : imageUri
        )
      );
      navigation.navigate("List");
    } else {
      Alert.alert("Atención", "Complete todos los campos para continuar");
    }
  };

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const onInputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      formDispatch({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [formDispatch]
  );

  const handleEdit = () => {
    setIsEditable(true)
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageSelector onImage={handlePickImage} />
      </View>
      <ScrollView>
        <View style={styles.dataContainer}>
          <Input
            id="name"
            label="Nombre"
            placeholder="Ej: Pizza"
            requiere
            errorText="Por favor ingrese un nombre"
            onInputChange={onInputChangeHandler}
            editable={isEditable}
          />

          <Input
            id="salePrice"
            label="Precio Venta"
            placeholder="$ 0.00"
            requiere
            errorText="Por favor ingrese un precio"
            onInputChange={onInputChangeHandler}
            keyboardType="decimal-pad"
            editable={isEditable}
          />

          <Input
            id="costPrice"
            label="Precio Costo"
            placeholder="$ 0.00"
            requiere
            errorText="Por favor ingrese un precio"
            onInputChange={onInputChangeHandler}
            keyboardType="decimal-pad"
            editable={isEditable}
          />

          <Input
            id="stock"
            label="Stock"
            placeholder="0"
            requiere
            errorText="Por favor ingrese una cantidad"
            onInputChange={onInputChangeHandler}
            keyboardType="numeric"
            editable={isEditable}
          />

          <Input
            id="description"
            label="Descripción"
            placeholder="Info sobre el producto"
            requiere
            errorText="Por favor ingrese texto"
            onInputChange={onInputChangeHandler}
            editable={isEditable}
          />

          <View styles={styles.rowContainer}>
            <Text>Visible</Text>
            <Switch value={isEnabled} onValueChange={toggleSwitch} disabled={!isEditable}/>
          </View>

          <Input
            id="timePreparation"
            label="Tiempo de elaboración (Minutos)"
            placeholder="0 minutos"
            requiere
            keyboardType="numeric"
            errorText="Por favor un tiempo valido"
            onInputChange={onInputChangeHandler}
            editable={isEditable}
          />

          {isEditable ?
              <Button
              title="Guardar"
              onPress={handleSave}
              icon={{
                name: "save",
                size: 15,
                color: "white",
                type: "material",
              }}
            ></Button>
            :
            <Button
              title="Editar Producto"
              onPress={handleEdit}
              icon={{
                name: "edit",
                size: 15,
                color: "white",
                type: "material",
              }}
            ></Button>
          }

         
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 16,
  },
  placeholderTitle: {
    fontSize: 18,
    opacity: 0.6,
    flexWrap: "nowrap",
    flexDirection: "row",
  },
  infoLabel: {
    fontSize: 18,
  },
  separator: {
    height: 2,
    width: "100%",
    backgroundColor: "#000",
    opacity: 0.1,
  },
  title: {
    fontSize: 30,
    fontFamily: "Ubuntu_500Medium",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#4EB1F9",
    padding: 16,
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  containerButton: {
    margin: 16,
    flex: 1,
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
    backgroundColor: "#f2f2f2",
    flexDirection: "column",
    justifyContent: "flex-start",
    flex: 1,
  },
  tinyLogo: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  imageContainer: {
    height: "35%",
  },
  dataContainer: {
    borderRadius: 10,
    margin: 16,
    padding: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});

export default AddProductScreen;
