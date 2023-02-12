import {axiosInstance} from "../../config/axiosConfig";
import {Exception} from "sass";
import {AxiosError} from "axios";


export const getListCategoryProducts = async () => {
  try {
    const { data } = await axiosInstance.get('/category/list-products/')
    return data
  } catch (e:any) {
    throw new Error('Hubo un error: ' + e.message)
  }
}

export const getListCategory = async () => {
  try {
    const { data } = await axiosInstance.get('/category/list/')
    return data
  } catch (e:any) {
    throw new Error('Hubo un error: ' + e.message)
  }
}