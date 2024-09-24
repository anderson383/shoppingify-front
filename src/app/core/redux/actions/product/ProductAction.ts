import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../../../../components/features/Products/models/Product";
import { repositoryContainer } from "../../../../services/config/inversify.config";
import { TYPES } from "../../../../services/config/types";
import { ShopRepository } from "../../../../services/repositories/shop.repository";


export const setDetalleContacto = createAsyncThunk('shop/setDetalleContacto', async (product: Product) => {
  const repository = repositoryContainer.get(TYPES.SHOP_REPOSITORY) as ShopRepository
  return await repository.getOneProduct(product.id)
})