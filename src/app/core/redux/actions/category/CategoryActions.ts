import {getListCategoryProducts} from "../../../api/category/CategoryRepository";
import {LIST_CATEGORIES} from "./CategoryTypes";


export const listCategoryProducts = () => {
  return  async (dispatch: any) => {
    dispatch({
      type: LIST_CATEGORIES,
      payload: await getListCategoryProducts()
    })
  }
}

