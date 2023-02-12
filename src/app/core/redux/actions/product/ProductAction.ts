import {Product} from "../../../../feature/Products/models/Product";
import {GET_PRODUCT} from "./ProductTypes";


export const getOneProduct = (product: Product) => {
  return async (dispatch: any) => {
    dispatch({
      type: GET_PRODUCT,
      payload: await getOneProduct(product)
    })
  }
}