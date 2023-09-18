import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => ({
      ...state,
      cart: [...state.cart, { ...action.payload, quantity: 1 }],
    }),
    removeFromCart: (state, { payload }) => ({
      ...state,
      cart: state.cart.filter((product) => product.id !== payload),
    }),
    incrementProduct: (state, action) => ({
      ...state,
      cart: state.cart.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      ),
    }),
    decrementProduct: (state, action) => ({
      ...state,
      cart: state.cart.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity - 1 }
          : product
      ),
    }),
  },
});

export const { addToCart, removeFromCart, incrementProduct, decrementProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
