import {Product} from "../../../feature/Products/Models/Product";

export const LIST_PRODUCTS = 'LIST_PRODUCTS'

interface ListProductAction {
  type: typeof LIST_PRODUCTS,
  payload: Product[]
}