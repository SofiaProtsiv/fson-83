import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../api";

export const fetchProducts = createAsyncThunk(
  "fetchProducts",
  async (params, { dispatch, rejectWithValue }) => {
    try {
      const data = await getProducts(params);

      if (!data.products.length) {
        throw new Error("No matches found");
      }

      dispatch(setTotalPages(data.total));
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
  totalPages: 0,
  limit: 30,
  currentPage: 1,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCurrentPage: (state) => {
      state.currentPage = state.currentPage + 1;
    },
    setTotalPages: (state, action) => {
      state.totalPages = Math.ceil(action.payload / state.limit);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      return {
        ...state,
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

// import { createSlice } from "@reduxjs/toolkit";
// import { getProducts } from "../../api";

// export const fetchProducts = (params) => {
//   return async (dispatch) => {
//     dispatch(fetchProductsRequest());
//     try {
//       const data = await getProducts(params);

// if (!data.products.length) {
//   throw new Error("No matches found");
// }
//       dispatch(setTotalPages(data.total));
//       dispatch(fetchProductsSuccess(data.products));
//     } catch (error) {
//       dispatch(fetchProductsError(error.message));
//     }
//   };
// };

// const STATUS = {
//   IDLE: "idle",
//   PENDING: "pending",
//   RESOLVED: "resolved",
//   REJECTED: "rejected",
// };

// const initialState = {
//   status: STATUS.IDLE,
//   error: null,
//   products: [],
//   totalPages: 0,
//   limit: 30,
//   currentPage: 1,
// };

// const productsSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     fetchProductsRequest: (state) => {
// state.status = STATUS.PENDING;
// state.error = null;
//     },
//     fetchProductsSuccess: (state, action) => {
// state.status = STATUS.RESOLVED;
// state.products = action.payload;
// state.error = null;
//       return {
//         ...state,
//         status: STATUS.RESOLVED,
//         products: action.payload,
//         error: null,
//       };
//     },
//     fetchProductsError: (state, action) => {
//       state.status = STATUS.REJECTED;
//       state.error = action.payload;
//     },
// setCurrentPage: (state) => {
//   state.currentPage = state.currentPage + 1;
// },
// setTotalPages: (state, action) => {
//   state.totalPages = Math.ceil(action.payload / state.limit);
// },
//   },
// });

// export const {
//   fetchProductsRequest,
//   fetchProductsSuccess,
//   fetchProductsError,
//   setCurrentPage,
//   setTotalPages,
// } = productsSlice.actions;

// export default productsSlice.reducer;
