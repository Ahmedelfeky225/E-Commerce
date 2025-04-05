import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./categoryApi";

const initialState = {
  categories: [],
  loading: false,
  error: false,
};

export const fetchCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    const res = await getCategories();
    return res;
  }
);

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default categorySlice.reducer;
