import { createStore, combineReducers } from "redux";

// Reducers
import OrderStateReducer from "./reducers/orderState.reducer";
import OrderReducer from "./reducers/orders.reducer";

const RootReducer = combineReducers({
  orderStates: OrderStateReducer,
  orders: OrderReducer
})

export default createStore(RootReducer)