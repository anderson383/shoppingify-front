import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { listCategoryProducts } from "../actions/category/CategoryActions";
import { Category } from "../../../components/features/Category/models/Category";
import { StatusCategory } from "../models/StatusCategory";

const initialState:StatusCategory = {
  isLoading: true,
  categories: []
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(listCategoryProducts.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(listCategoryProducts.fulfilled, (state, action: PayloadAction<Category[]>) => {
      if  (action.payload) {
        state.categories = action.payload
      }
    })
    .addCase(listCategoryProducts.rejected, (state, action) => {
      state.isLoading = false;
    })
  }
})
