import { createSlice } from "@reduxjs/toolkit";
import { handleMenuAction } from "../actions/menu/MenuAction";
import { StatusMenu } from "../models/StatusMenu";

const initialState:StatusMenu = {
  showMenu: false
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    handleMenuAction
  },
})

export const {
  handleMenuAction: handleMenuActionSlice
} = menuSlice.actions