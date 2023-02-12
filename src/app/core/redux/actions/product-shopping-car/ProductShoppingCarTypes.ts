
import {ProductShoppingCar} from "../../../../feature/ProductShoppingCar/models/ProductShoppingCar";


export const ADD_ITEM_SHOPPING_CAR = 'ADD_ITEM_SHOPPING_CAR'
export const EDIT_CANT_SHOPPING_CAR = 'EDIT_CANT_SHOPPING_CAR'
export const DELETE_ITEM_SHOPPING_CAR = 'DELETE_ITEM_SHOPPING_CAR'
export const RESET_ALL_SHOPPING_CAR = 'RESET_ALL_SHOPPING_CAR'

export interface AddItemShoppingCarAction {
  type: typeof ADD_ITEM_SHOPPING_CAR
  payload: ProductShoppingCar
}

export interface EditCantShoppingCarAction {
  type: typeof EDIT_CANT_SHOPPING_CAR
  payload: ProductShoppingCar
}

export interface DeleteItemShoppingCarAction {
  type: typeof DELETE_ITEM_SHOPPING_CAR
  payload: ProductShoppingCar
}

export interface ResetAllShoppingCarAction {
  type: typeof RESET_ALL_SHOPPING_CAR
  payload: ProductShoppingCar
}



export type  TypesProductShoppingCar = AddItemShoppingCarAction |
  EditCantShoppingCarAction | DeleteItemShoppingCarAction | ResetAllShoppingCarAction