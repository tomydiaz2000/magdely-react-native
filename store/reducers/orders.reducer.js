import { ORDER_LIST } from "../../data/mock-data";

const initialState = {
  orders: ORDER_LIST,
  filteredOrder: [],
  seleted: null
}

const OrderReducer = (state = initialState, action) => {
  return state
}

export default OrderReducer