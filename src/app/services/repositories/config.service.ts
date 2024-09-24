
import {injectable} from 'inversify'
import { ConfigRepository } from './config.repository';
import { axiosInstance } from '../../core/config/axiosConfig';

@injectable()
export class ConfigService implements ConfigRepository {

  constructor() {

  }

  
  async getListCategoryProducts() {
    try {
      const { data } = await axiosInstance.get('/category/list-products/')
      return data
    } catch (e:any) {
      console.error('Hubo un error: ' + e.message)
      return []
    }
  }

  async getListCategory()  {
    try {
      const { data } = await axiosInstance.get('/category/list/')
      return data
    } catch (e:any) {
      console.error('Hubo un error: ' + e.message)
      return []
    }
  }

  async getCategoryListHistory (id:string)  {
    try {
      const { data } = await axiosInstance.get(`/category/history/${id}`)
      return data
    } catch (error:any) {
      console.error('Hubo un error: ' + error.message)
      return []
    }
  }
}
