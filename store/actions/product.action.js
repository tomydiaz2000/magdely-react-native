import { insertProduct, fetchProduct } from "../../db/products"

export const SELECT_PRODUCT = 'SELECT_PRODUCT'
export const ADD_PRODUCT = 'ADD_PRODUCT'

export const selectProduct = (id) => ({
  type: SELECT_PRODUCT,
  productID: id
})

export const addProduct = (name, description, active, price, stock, cost, timePreparation, sync) => {
  return async dispatch => {
    try {
      const result = await insertProduct(
        name,
        description,
        active,
        price,
        stock,
        cost,
        timePreparation, 
        sync
      )

      dispatch({ type: ADD_PRODUCT, payload: {
        id: result.insertId,
        name,
        description,
        active,
        price,
        stock,
        cost,
        timePreparation,
        sync
      }})
    } catch (err) {
      console.log(err.message)
      throw err
    }
  }
}