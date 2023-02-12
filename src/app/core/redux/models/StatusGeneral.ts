import {StatusCategory} from "./StatusCategory";
import {StatusProduct} from "./StatusProduct";
import {StatusProductShoppingCar} from "./StatusProductShoppingCar";
import {StatusMenu} from "./StatusMenu";


export interface StatusGeneral {
  menu: StatusMenu,
  category: StatusCategory
  product: StatusProduct
  product_shopping_car: StatusProductShoppingCar
}
