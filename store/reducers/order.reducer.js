import { ORDERS } from "../../data/orders";
import { SELECT_ORDER } from "../actions/order.action";

const initialState = {
  orders: ORDERS,
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