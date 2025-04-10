import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../app/features/product/productSlice";
import categoryReducer from "../app/features/category/categorySlice";
import bagReducer from "../app/features/bag/bagSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    categories: categoryReducer,
    bag: bagReducer,
  },
});
