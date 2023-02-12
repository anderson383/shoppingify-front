import {axiosInstance} from "../../config/axiosConfig";


export const getHistoryShoppingCar = async () => {
  try {
    const {data} = await axiosInstance.get('/shopping-car/history')
    return data
  } catch (e) {

  }
}