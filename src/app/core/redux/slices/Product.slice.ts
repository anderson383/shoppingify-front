import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StatusProduct } from "../models/StatusProduct";
import { setDetalleContacto } from "../actions/product/ProductAction";
import { Product } from "../../../components/features/Products/models/Product";

const initialState:StatusProduct = {
  product: []
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(setDetalleContacto.fulfilled, (state, action: PayloadAction<Product[]>) => {
      state.product = action.payload
    })
  }
})


