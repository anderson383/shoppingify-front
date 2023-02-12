import {StatusCategory} from "../../models/StatusCategory";
import {GET_PRODUCT, TypesProductActions} from "../../actions/product/ProductTypes";
import {StatusProduct} from "../../models/StatusProduct";


const initialState:StatusProduct = {
  product: []
}

export const ProductReducer = ( state = initialState,   action: TypesProductActions ): StatusProduct => {

  const cases = {
    [GET_PRODUCT]: () => {
      return {
        ...state,
        product: action.payload
      }
    }

  }

  return cases[action.type] ? cases[action.type]() : state;
}