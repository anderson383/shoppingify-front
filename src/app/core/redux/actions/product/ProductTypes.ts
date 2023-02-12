import {Product} from "../../../../feature/Products/models/Product";


export const LIST_PRODUCTS = 'LIST_PRODUCTS'
export const GET_PRODUCT = 'GET_PRODUCT'

interface ListProductAction {
  type: typeof GET_PRODUCT,
  payload: Product[]
}


export type TypesProductActions = ListProductAction