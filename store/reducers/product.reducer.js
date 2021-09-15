import { PRODUCTS } from "../../data/products"


const initialState = {
  products: PRODUCTS,
  filteredProduct: [],
  seletedID: null
}

const ProductReducer = (state = initialState, action) => {
  switch(action.type) {
    case SELECT_PR
  }
}

export default ProductReducer