import {axiosInstance} from "../../config/axiosConfig";
import {ShoppingCar} from "../../../feature/ShoppingCar/models/ShoppingCar";


export const saveProductShoppingCar = async (payload:ShoppingCar) => {
  try {
    const {data} = await axiosInstance.post('/product-shopping-car/', payload)
  } catch (e) {

  }
}