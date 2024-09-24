import Cookies from "js-cookie"
import { StatusProductShoppingCar } from "../models/StatusProductShoppingCar"
import { createSlice } from "@reduxjs/toolkit"
import { addProductShoppingCar, deleteItemProductShoppingCar, editCantProductShoppingCar, resetAllProductShoppingCar } from "../actions/product-shopping-car/ProductShopppingCarAction"

const DEFAULT_VALUE = { list: [] as any}
const COOKIE_KEY = 'product_shopping_car'

const getCookieProductShoppingCar = (): StatusProductShoppingCar => {
  try {
    return JSON.parse(Cookies.get(COOKIE_KEY) || '')
  } catch (e) {
    return DEFAULT_VALUE
  }
}

const initialState:StatusProductShoppingCar =  getCookieProductShoppingCar()

export const productShopCardSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProductShoppingCar,
    editCantProductShoppingCar,
    deleteItemProductShoppingCar,
    resetAllProductShoppingCar
  },
})

export const {
  addProductShoppingCar: addProductShoppingCarSlice,
  editCantProductShoppingCar: editCantProductShoppingCarSlice,
  deleteItemProductShoppingCar: deleteItemProductShoppingCarSlice,
  resetAllProductShoppingCar: resetAllProductShoppingCarSlice
} = productShopCardSlice.actions