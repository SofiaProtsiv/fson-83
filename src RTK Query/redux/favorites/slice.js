import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorites: (state, action) => ({
      ...state,
      favorites: [...state.favorites, action.payload],
    }),
    removeFromFavorites: (state, action) => ({
      ...state,
      favorites: state.favorites.filter(
        (product) => product.id !== action.payload
      ),
    }),
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
