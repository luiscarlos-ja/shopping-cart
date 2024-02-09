import { CART_ACTION_TYPES } from "../types.d";

export const cartInitialState = (
  window.localStorage.getItem("cart")
    ? JSON.parse(window.localStorage.getItem("cart") ?? "")
    : []
) as CartInitialState;

export const updateLocalStorage = (state: CartInitialState) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

export const cartReducer = (state: CartInitialState, action: CartAction) => {
  const { type } = action;

  if (type === CART_ACTION_TYPES.ADD_TO_CART) {
    const { id } = action.payload;
    const productInCartIndex = state.findIndex(
      (item) => item.product.id === id
    );

    if (productInCartIndex >= 0) {
      // 👀 using structuredClone
      const newState = structuredClone(state);
      newState[productInCartIndex].quantity += 1;

      // 👶 using map
      // const newState = state.map(item => {
      //   if (item.id === id) {
      //     return {
      //       ...item,
      //       quantity: item.quantity + 1
      //     }
      //   }

      //   return item
      // })

      // ⚡ using spread operator & slice
      //   const newState = [
      //     ...state.slice(0, productInCartIndex),
      //     { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1 },
      //     ...state.slice(productInCartIndex + 1)
      //   ]

      updateLocalStorage(newState);
      return newState;
    }

    const newState: CartInitialState = [
      ...state,
      {
        product: { ...action.payload }, // product
        quantity: 1,
      },
    ];

    updateLocalStorage(newState);
    return newState;
  }
  if (type === CART_ACTION_TYPES.REMOVE_FROM_CART) {
    const { id } = action.payload;
    const newState = state.filter((item) => item.product.id !== id);
    updateLocalStorage(newState);
    return newState;
  }
  if (type === CART_ACTION_TYPES.CLEAR_CART) {
    updateLocalStorage([]);
    return [];
  }
  return state;
};
