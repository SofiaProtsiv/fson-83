import { devToolsEnhancer } from "@redux-devtools/extension";
import { combineReducers, createStore } from "redux";
import { productsReducer, filtersReducer } from "./reducers";

const rootReducer = combineReducers({
  products: productsReducer,
  filters: filtersReducer
})

const enhancer = devToolsEnhancer();
const store = createStore(rootReducer, enhancer);

export default store;