import { createAction } from "@reduxjs/toolkit";
import { cartActions } from "./constants";

export const addToCart = createAction(cartActions.add);
export const removeFromCart = createAction(cartActions.remove);
export const incrementProduct = createAction(cartActions.increment);
export const decrementProduct = createAction(cartActions.decrement);

// import { cartActions } from './constants'

// export const addToCart = (product) => ({
//   type: cartActions.add,
//   payload: product,
// });

// export const removeFromCart = (productId) => ({
//   type: cartActions.remove,
//   payload: productId,
// });

// export const incrementProduct = (productId) => ({
//   type: cartActions.increment,
//   payload: productId,
// });

// export const decrementProduct = (productId) => ({
//   type: cartActions.decrement,
//   payload: productId,
// });
