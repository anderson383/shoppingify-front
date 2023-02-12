import {Category} from "../../Category/models/Category";


export interface Product {
  id: string
  name: string
  note?: string
  image?: string
  category?: Category
  categoryId?: string
}