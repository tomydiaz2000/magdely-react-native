import { ORDER_STATES } from "../../data/mock-data";

const initialState = {
  states: ORDER_STATES,
  seleted: null
}

const OrderStateReducer = (state = initialState, action) => {
  return state
}

export default OrderStateReducer