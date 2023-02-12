import {Product} from "../../Products/models/Product";

export interface Category {
  id: string
  name: string
  products?: Product[]
}