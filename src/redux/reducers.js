import ACTIONS from "./constans";

// PRODUCTS
const productsInitialState = {
  products: [
    { id: 1, name: "burger", image: "🍔" },
    { id: 2, name: "fries", image: "🍟" },
    { id: 3, name: "coca-cola", image: "🥤" },
  ],
  cart: [],
};

export const productsReducer = (state = productsInitialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_PRODUCT:
      const product = state.products.find(
        (product) => product.id === action.payload
      );

      return { ...state, cart: [...state.cart, product] };
    case ACTIONS.REMOVE_PRODUCT:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      };
    default:
      return state;
  }
};

// FILTERS

const filtersInitialState = {
  searchQuery: "",
};
export const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
};
