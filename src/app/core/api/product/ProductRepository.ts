import {axiosInstance} from "../../config/axiosConfig";
import {Product} from "../../../feature/Products/models/Product";


export const getOneProduct = async (id: string | undefined) => {
  try {
    const { data } = await axiosInstance.get(`/product/${id}`)
    return data
  } catch (e:any) {
    throw new Error('Hubo un error: ' + e.message)
  }
}

export const postSaveProduct = async (payload: Product) => {
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