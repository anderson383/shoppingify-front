import {Category} from "../../Category/models/Category";
import { ProductShoppingCar } from "../../ProductShoppingCar/models/ProductShoppingCar";


export interface Product {
  id: string
  name: string
  note?: string
  image?: string
  category?: Category
  categoryId?: string
  list_history?: ProductShoppingCar[]
}