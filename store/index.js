import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

// Reducers
import OrderStateReducer from "./reducers/orderState.reducer";
import OrderReducer from "./reducers/order.reducer";
import AuthReducer from "./reducers/auth.reducer";
import ProductReducer from "./reducers/product.reducer";

const RootReducer = combineReducers({
  products: ProductReducer,
  orderStates: OrderStateReducer,
  orders: OrderReducer,
  auth: AuthReducer
})

export default createStore(RootReducer, applyMiddleware(thunk))