import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://64f9fd9a4098a7f2fc15422a.mockapi.io/api/v1",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/products`,
    }),
    getCart: builder.query({
      query: () => `/cart`,
      providesTags: ["Cart"],
    }),
    addProductToCart: builder.mutation({
      query: (body) => ({
        url: "/cart",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Cart"],
    }),
    deleteProductFromCart: builder.mutation({
      query: (id) => ({
        url: `/cart/${id}`,
        method: "DELETE",
        id,
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductToCartMutation,
  useDeleteProductFromCartMutation,
  useGetCartQuery,
} = productsApi;
