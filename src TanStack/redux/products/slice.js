import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../api";

export const fetchProducts = createAsyncThunk(
  "fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getProducts();

      if (!data.products.length) {
        throw new Error("No matches found");
      }

      return data.products;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

const STATUS = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

const initialState = {
  status: STATUS.IDLE,
  error: null,
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      return {
        ...state,
        products: [],
        status: STATUS.PENDING,
        error: null,
      };
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return {
        ...state,
        status: STATUS.RESOLVED,
        products: [...state.products, ...action.payload],
        error: null,
      };
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      return {
        ...state,
        status: STATUS.REJECTED,
        error: action.payload,
      };
    });
  },
});

export const { setCurrentPage, setTotalPages } = productsSlice.actions;
export default productsSlice.reducer;
