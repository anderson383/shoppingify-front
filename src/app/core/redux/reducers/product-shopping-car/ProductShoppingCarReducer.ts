import Cookies from 'js-cookie'
import {StatusProductShoppingCar} from "../../models/StatusProductShoppingCar";
import {
  ADD_ITEM_SHOPPING_CAR,
  DELETE_ITEM_SHOPPING_CAR,
  EDIT_CANT_SHOPPING_CAR, RESET_ALL_SHOPPING_CAR,
  TypesProductShoppingCar
} from "../../actions/product-shopping-car/ProductShoppingCarTypes";

const DEFAULT_VALUE = { list: [] }
const COOKIE_KEY = 'product_shopping_car'

const getCookieProductShoppingCar = (): StatusProductShoppingCar => {
  try {
    return JSON.parse(Cookies.get(COOKIE_KEY) || '')
  } catch (e) {
    return DEFAULT_VALUE
  }
}

const intialState:StatusProductShoppingCar = getCookieProductShoppingCar()



export const ProductShoppingCarReducer = (state = intialState, {payload, type}: TypesProductShoppingCar) : StatusProductShoppingCar => {

  const cases = {

    [RESET_ALL_SHOPPING_CAR]: () => {
      Cookies.remove(COOKIE_KEY)
      return DEFAULT_VALUE
    },

    [DELETE_ITEM_SHOPPING_CAR]: () => {
      let list = state.list.filter(item => (item.product.id !== payload.product.id))
      return { ...state, list }
    },

    [EDIT_CANT_SHOPPING_CAR]: () => {
      let list = state.list.map(item => (
        item.product.id === payload.product.id ? payload : item
      ))
      return { ...state, list }
    },

    [ADD_ITEM_SHOPPING_CAR]: () => {
      const exist = state.list.some(item => (item.product.id === payload.product.id))

      let list = state.list.map(item => (
        item.product.id === payload.product.id ? { ...item, pcx: item.pcx + 1 } : item
      ))

      if (!exist) list = [...list, payload ]

      return { ...state,  list }
    }
  }
  const stateDefault = cases[type] ? cases[type]() : state

  Cookies.set(COOKIE_KEY, JSON.stringify(stateDefault), { expires: 1, secure: true })

  return stateDefault;
}