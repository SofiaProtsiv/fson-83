import { combineReducers } from "redux";
import cartReducer from "./cart/slice";
import favoritesReducer from "./favorites/slice";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  cart: cartReducer,
  favorites: favoritesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

// import { combineReducers, createStore } from "redux"
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import cartReducer from "./cart/reducer";
// import favoritesReducer from "./favorites/reducer";

// const rootReducer = combineReducers({
//   cart: cartReducer,
//   favorites: favoritesReducer
// });

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);
