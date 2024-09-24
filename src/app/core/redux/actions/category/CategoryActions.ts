import { createAsyncThunk } from "@reduxjs/toolkit";
import { repositoryContainer } from "../../../../services/config/inversify.config";
import { TYPES } from "../../../../services/config/types";
import { ConfigRepository } from "../../../../services/repositories/config.repository";

export const listCategoryProducts = createAsyncThunk('config/listCategoryProducts', async () => {
  const repository = repositoryContainer.get(TYPES.CONFIG_REPOSITORY) as ConfigRepository
  return  await repository.getListCategoryProducts()
})

