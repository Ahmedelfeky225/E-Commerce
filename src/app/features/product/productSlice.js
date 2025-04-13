import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts, getProductById } from "./productApi";

const initialState = {
  productsByCategory: {},
  selectedProduct: null,
  allProducts: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/getProducts",
  async (category) => {
    const res = await getProducts(category);
    return { category, products: res };
  }
);

export const fetchProductById = createAsyncThunk(
  "products/getProductById",
  async (id) => {
    const res = await getProductById(id);
    return res;
  }
);

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    const res = await getProducts(); // بدون category
    return res;
  }
);
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.productsByCategory = {
          ...state.productsByCategory,
          [action.payload.category]: action.payload.products,
        };
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.allProducts = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
