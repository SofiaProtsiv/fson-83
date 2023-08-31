import { createAction } from "@reduxjs/toolkit";
import { favoritesActions } from "./constants";

export const addToFavorites = createAction(favoritesActions.addToFavorites);
export const removeFromFavorites = createAction(
  favoritesActions.removeFromFavorites
);

// import { favoritesActions } from './constants';

// export const addToFavorites = (product) => {
//   return {
//     type: favoritesActions.addToFavorites,
//     payload: product,
//   };
// };

// export const removeFromFavorites = (productId) => {
//   return {
//     type: favoritesActions.removeFromFavorites,
//     payload: productId,
//   };
// };
