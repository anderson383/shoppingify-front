import {axiosInstance} from "../../config/axiosConfig";
import {ShoppingCar} from "../../../feature/ShoppingCar/models/ShoppingCar";


export const saveProductShoppingCar = async (payload:ShoppingCar) => {
  try {
    await axiosInstance.post('/product-shopping-car/', payload)
  } catch (e) {
    console.warn(e)
  }
}