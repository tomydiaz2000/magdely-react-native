export const SELECT_ORDER = 'SELECT_ORDER';
export const ADD_ORDER = 'ADD_ORDER';
export const REMOVE_ORDER = 'REMOVE_ORDER';

export const selectOrder = (id) => ({
  type: SELECT_ORDER,
  orderID: id
})

export const addOrder = item => ({
  type: ADD_ORDER,
  item
})

export const removeOrder = item => ({
  type: REMOVE_ORDER,
  item
})