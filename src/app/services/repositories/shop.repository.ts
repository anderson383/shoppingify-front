import { Product } from "../../components/features/Products/models/Product";
import { ShoppingCar } from "../../components/features/ShoppingCar/models/ShoppingCar";

export interface ShopRepository {
  getHistoryShoppingCar(): Promise<any[]>;
  getOneProduct (id: string): Promise<any>
  postSaveProduct (payload: Product): Promise<any>
  saveProductShoppingCar (payload:ShoppingCar) :Promise<void>
}