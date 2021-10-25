import Product from "../../models/product/Product"
import { ADD_PRODUCT, FETCH_PRODUCT, SELECT_PRODUCT } from "../actions/product.action"

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
          action.payload.sync,
          action.payload.image
      )

      return {
        ...state,
        products: state.products.concat(newProduct)
      }
    case FETCH_PRODUCT:
      console.log(action)
      return {
        ...state,
        products: action.products.map(item => new Product(
          item.id.toString(),
          item.name,
          item.description,
          item.active,
          item.price,
          item.cost,
          item.stock,
          item.timePreparation,
          item.sync,
          item.image
        ))
      }
    case SELECT_PRODUCT:
      console.log(action)
      return {
        ...state,
        seletedID: action.productID
      }
    default:
      return state
  }
}

export default ProductReducer