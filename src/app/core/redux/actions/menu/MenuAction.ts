import { PayloadAction } from "@reduxjs/toolkit";
import { StatusMenu } from "../../models/StatusMenu";

export const handleMenuAction = (state:StatusMenu, { payload }: PayloadAction<boolean>):StatusMenu => {
  return ({
    ...state,
    showMenu: payload
  })
}