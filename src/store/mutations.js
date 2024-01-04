export const ADD_TO_CART = (state, { product }) => {
  state.cart.push(product);
}

export const REMOVE_FROM_CART = (state, index) => {
  state.cart.splice(index, 1);
}

export const SET_SELECTEDMENU = (state, menu) => {
  state.selectedMenu = menu;
}
export const SET_PRODUCTS = (state, products) => {
  state.products = products;
}
export const SET_FILTER = (state, filter) => {
  state.filter = filter;
}