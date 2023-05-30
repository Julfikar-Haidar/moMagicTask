import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products?limit=10`,
      keepUnusedDataFor: 6000,
      providesTags: ["Products"],
    }),
    getCategory: builder.query({
      query: () => `/products/categories`,
      keepUnusedDataFor: 6000,
    }),
    getProductByCategory: builder.query({
      query: ({ categoryName, limit }) => {
        console.log("categoryName", categoryName);
        let url = `/products/category/`;
        if (categoryName) {
          url += `${categoryName}`;
        }

        url += `?limit=${limit}`;
        return url;
      },
      keepUnusedDataFor: 3000,
    }),
    getProduct: builder.query({
      query: (id) => `/products/${id}`,
      keepUnusedDataFor: 3000,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetCategoryQuery,
  useGetProductByCategoryQuery,
} = apiSlice;
