import { useReducer } from "react";
import { cartInitialState, cartReducer } from "../reducers/cart";
import { CART_ACTION_TYPES } from "../types.d";

export function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product: Product) =>
    dispatch({
      type: CART_ACTION_TYPES.ADD_TO_CART,
      payload: product,
    });

  const removeFromCart = (product: Product) =>
    dispatch({
      type: CART_ACTION_TYPES.REMOVE_FROM_CART,
      payload: product,
    });

  const clearCart = () => dispatch({ type: CART_ACTION_TYPES.CLEAR_CART });

  return { state, addToCart, removeFromCart, clearCart };
}
