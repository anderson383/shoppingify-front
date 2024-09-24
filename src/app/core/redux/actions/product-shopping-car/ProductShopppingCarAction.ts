import { PayloadAction } from "@reduxjs/toolkit";
import Cookies from 'js-cookie'
import { ProductShoppingCar } from "../../../../components/features/ProductShoppingCar/models/ProductShoppingCar";
import { StatusProductShoppingCar } from "../../models/StatusProductShoppingCar";


const DEFAULT_VALUE = { list: [] as any}
const COOKIE_KEY = 'product_shopping_car'


const updateCookie = (state: StatusProductShoppingCar)  => {
  const stateDefault = state

  Cookies.set(COOKIE_KEY, JSON.stringify(stateDefault), { expires: 1, secure: true })
}


export const addProductShoppingCar = (state:StatusProductShoppingCar, { payload }: PayloadAction<ProductShoppingCar>):StatusProductShoppingCar => {
  const exist = state.list.some(item => (item.product.id === payload.product.id))

  let list = state.list.map(item => (
    item.product.id === payload.product.id ? { ...item, pcx: item.pcx + 1 } : item
  ))

  if (!exist) list = [...list, payload ]

  const stateDefault = { ...state, list }
  updateCookie(stateDefault)
  return stateDefault
}

export const editCantProductShoppingCar = (state:StatusProductShoppingCar, { payload }: PayloadAction<ProductShoppingCar>):StatusProductShoppingCar => {
  let list = state.list.map(item => (
    item.product.id === payload.product.id ? payload : item
  ))

  const stateDefault = { ...state, list }
  updateCookie(stateDefault)
  return stateDefault
}

export const deleteItemProductShoppingCar = (state:StatusProductShoppingCar, { payload }: PayloadAction<ProductShoppingCar>):StatusProductShoppingCar => {
  let list = state.list.filter(item => (item.product.id !== payload.product.id))
  const stateDefault = { ...state, list }
  updateCookie(stateDefault)
  return stateDefault
}

export const resetAllProductShoppingCar = (state:StatusProductShoppingCar, { payload }: PayloadAction<ProductShoppingCar>):StatusProductShoppingCar => {
  Cookies.remove(COOKIE_KEY)
  return DEFAULT_VALUE
}
