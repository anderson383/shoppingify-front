import {axiosInstance} from "../../config/axiosConfig";


export const getListCategoryProducts = async () => {
  try {
    const { data } = await axiosInstance.get('/category/list-products/')
    return data
  } catch (e:any) {
    console.error('Hubo un error: ' + e.message)
  }
}

export const getListCategory = async () => {
  try {
    const { data } = await axiosInstance.get('/category/list/')
    return data
  } catch (e:any) {
    console.error('Hubo un error: ' + e.message)
  }
}

export const getCategoryListHistory = async (id:string) => {
  try {
    const { data } = await axiosInstance.get(`/category/history/${id}`)
    return data
  } catch (error:any) {
    console.error('Hubo un error: ' + error.message)
  }
}