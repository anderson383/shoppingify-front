import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { menuSlice } from './slices/Menu.slices';
import { categorySlice } from './slices/Category.slices';
import { productSlice } from './slices/Product.slice';
import { productShopCardSlice } from './slices/ProductShoppingCard.slice';

export const rootReducer = combineReducers({
  category: categorySlice.reducer,
  product: productSlice.reducer,
  product_shopping_car: productShopCardSlice.reducer,
  menu: menuSlice.reducer
});

type RootState = ReturnType<typeof rootReducer>;

const store = configureStore<RootState>({
  reducer: rootReducer
})

export type RootStateType = ReturnType<typeof store.getState>

export default store;
