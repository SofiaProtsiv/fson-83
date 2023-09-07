import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import favoritesReducer from "./favorites/slice";
import cartReducer from "./cart/slice";
import { productsApi } from "./productsRTK/productsRTK";

const rootReducer = combineReducers({
  cart: cartReducer,
  favorites: favoritesReducer,
  // products: productsReducer,
  [productsApi.reducerPath]: productsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
