import {StatusCategory} from "../../models/StatusCategory";
import {LIST_CATEGORIES, TypesActionsCategory} from "../../actions/category/CategoryTypes";

const initialState:StatusCategory = {
  categories: []
}

export const CategoryReducer = ( state = initialState,   action: TypesActionsCategory ): StatusCategory => {
  const cases = {

    [LIST_CATEGORIES] : () => {
      return {
        ...state,
        categories: action.payload
      }
    }

  }

  return cases[action.type] ? cases[action.type]() : state
}