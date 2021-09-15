export const SELECT_PRODUCT = 'SELECT_PRODUCT'

export const selectProduct = (id) => ({
  type: SELECT_PRODUCT,
  productID: id
})