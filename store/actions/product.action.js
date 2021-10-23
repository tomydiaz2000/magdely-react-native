import { insertProduct, fetchProduct } from "../../db/products";
import * as FileSystem from "expo-file-system";
export const SELECT_PRODUCT = "SELECT_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const FETCH_PRODUCT = "FETCH_PRODUCT";

export const selectProduct = (id) => ({
  type: SELECT_PRODUCT,
  productID: id,
});

export const loadProducts = () => {
  return async (dispatch) => {
    try {
      const result = await fetchProduct();
      console.log(result);

      dispatch({
        type: FETCH_PRODUCT,
        products: result.rows._array,
      });
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  };
};

export const addProduct = (
  name,
  description,
  active,
  price,
  stock,
  cost,
  timePreparation,
  sync,
  image
) => {
  return async (dispatch) => {
    console.log('Product Action: ' + image)

    var path = image

    if(!image.includes('http')) {
      const fileName = image.split("/").pop();
      path = FileSystem.documentDirectory + fileName;

      FileSystem.moveAsync({
        from: image,
        to: path,
      });
    }    

    try {
      const result = await insertProduct(
        name,
        description,
        active,
        price,
        stock,
        cost,
        timePreparation,
        sync,
        path
      );

      dispatch({
        type: ADD_PRODUCT,
        payload: {
          id: result.insertId,
          name,
          description,
          active,
          price,
          stock,
          cost,
          timePreparation,
          sync,
          image: path
        },
      });
    } catch (err) {
      console.log(err.message);
      throw err;
    }
  };
};
