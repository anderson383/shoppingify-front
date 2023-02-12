import {Category} from "../../../../feature/Category/models/Category";


export const LIST_CATEGORIES = 'LIST_CATEGORIES'

interface ListProductAction {
  type: typeof LIST_CATEGORIES,
  payload: Category[]
}


export type TypesActionsCategory =
  ListProductAction