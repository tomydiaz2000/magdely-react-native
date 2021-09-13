import { ORDER_LIST } from "../../data/mock-data";
import { SELECT_ORDER } from "../actions/order.action";

const initialState = {
  orders: ORDER_LIST,
  filteredOrder: [],
  seletedID: null
}

const OrderReducer = (state = initialState, action) => {
  switch(action.type) {
    case SELECT_ORDER:
      return {...state, seletedID: action.orderID}
    default:
      return state
  }
}

export default OrderReducer