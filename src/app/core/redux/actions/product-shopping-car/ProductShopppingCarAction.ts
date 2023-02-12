import {
  ADD_ITEM_SHOPPING_CAR,
  DELETE_ITEM_SHOPPING_CAR,
  EDIT_CANT_SHOPPING_CAR,
  RESET_ALL_SHOPPING_CAR
} from "./ProductShoppingCarTypes";
import {ProductShoppingCar} from "../../../../feature/ProductShoppingCar/models/ProductShoppingCar";


export const addProductShoppingCar = (productShoppingCar: ProductShoppingCar) => {
  return (dispatch: any) => {
    dispatch({
      type: ADD_ITEM_SHOPPING_CAR,
      payload: productShoppingCar
    })
  }
}

export const editCantProductShoppingCar = (productShoppingCar: ProductShoppingCar) => {
  return (dispatch: any) => {
    dispatch({
      type: EDIT_CANT_SHOPPING_CAR,
      payload: productShoppingCar
    })
  }
}

export const deleteItemProductShoppingCar = (productShoppingCar: ProductShoppingCar) => {
  return (dispatch: any) => {
    dispatch({
      type: DELETE_ITEM_SHOPPING_CAR,
      payload: productShoppingCar
    })
  }
}

export const resetAllProductShoppingCar = () => {
  return (dispatch: any) => {
    dispatch({
      type: RESET_ALL_SHOPPING_CAR,
      payload: null
    })
  }
}

