import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts, getProductById } from "./productApi";

const initialState = {
  productsByCategory: {}, // تخزين المنتجات حسب كل كاتيجوري
  selectedProduct: null, // المنتج المحدد
  loading: false,
  error: null,
};

// جلب المنتجات حسب الفئة
export const fetchProducts = createAsyncThunk(
  "products/getProducts",
  async (category) => {
    const res = await getProducts(category);
    return { category, products: res };
  }
);

// جلب منتج معين حسب الـ ID
export const fetchProductById = createAsyncThunk(
  "products/getProductById",
  async (id) => {
    const res = await getProductById(id);
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
      });
  },
});

export const { clearSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
