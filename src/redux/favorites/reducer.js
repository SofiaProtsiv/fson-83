import { createReducer } from "@reduxjs/toolkit";
import { favoritesActions } from "./constants";

const initialState = {
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

const favoritesReducer = createReducer(initialState, {
  [favoritesActions.addToFavorites]: (state, action) => ({
    ...state,
    favorites: [...state.favorites, action.payload],
  }),
  [favoritesActions.removeFromFavorites]: (state, action) => ({
    ...state,
    favorites: state.favorites.filter(
      (product) => product.id !== action.payload
    ),
  }),
});

export default favoritesReducer;

// import { favoritesActions } from './constants';

// const initialState = {
//   favorites: JSON.parse(localStorage.getItem("favorites")) || [],
// };

// const favoritesReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case favoritesActions.addToFavorites:
//       return { ...state, favorites: [...state.favorites, action.payload] };
//     case favoritesActions.removeFromFavorites:
//       return {
// ...state,
// favorites: state.favorites.filter(
//   (product) => product.id !== action.payload
// ),
//       };
//     default:
//       return state;
//   }
// };

// export default favoritesReducer;
