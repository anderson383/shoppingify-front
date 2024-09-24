
import {injectable} from 'inversify'
import { ShopRepository } from './shop.repository';
import { axiosInstance } from '../../core/config/axiosConfig';
import { Product } from '../../components/features/Products/models/Product';
import { ShoppingCar } from '../../components/features/ShoppingCar/models/ShoppingCar';

@injectable()
export class ShopService implements ShopRepository {

  constructor() {

  }

  async getHistoryShoppingCar () {
    try {
      const {data} = await axiosInstance.get('/shopping-car/history')
    
      return data
    } catch (e) {
  
    }
  }
  
  async getOneProduct (id: string) {
    try {
      const { data } = await axiosInstance.get(`/product/${id}`)
      return data
    } catch (e:any) {
      throw new Error('Hubo un error: ' + e.message)
    }
  }

  async postSaveProduct  (payload: Product)  {
    try {
      const { data } = await axiosInstance.post(`/product/`, {
        name: payload.name,
        note: payload.note,
        image: payload.image,
        category: payload.categoryId
      })
      return data
    } catch (e:any) {
      throw new Error('Hubo un error: ' + e.message)
    }
  }

  async saveProductShoppingCar (payload: ShoppingCar)  {
    try {
      await axiosInstance.post('/product-shopping-car/', payload)
    } catch (e) {
      console.warn(e)
    }
  }
}
