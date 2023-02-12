import {Product} from "../../Products/models/Product";
import {ShoppingCar} from "../../ShoppingCar/models/ShoppingCar";


export interface ProductShoppingCar {
  id?: string
  pcx: number
  product: Product
  shopping?: ShoppingCar
}

