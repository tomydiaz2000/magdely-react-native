import Product from "../../models/product/Product"
import { ADD_PRODUCT } from "../actions/product.action"

const initialState = {
  products: [],
  seletedID: null
}

const ProductReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PRODUCT:
      const newProduct = new Product(
          action.payload.id,
          action.payload.name,
          action.payload.description,
          action.payload.active,
          action.payload.price,
          action.payload.stock,
          action.payload.cost,
          action.payload.timePreparation,
          action.payload.sync
      )

      return {
        ...state,
        products: state.products.concat(newProduct)
      }
    default:
      return state
  }
}

export default ProductReducer