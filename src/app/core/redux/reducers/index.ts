import { combineReducers } from 'redux'
import {CategoryReducer} from "./category/CategoryReducer";
import {ProductReducer} from "./product/ProductReducer";
import {ProductShoppingCarReducer} from "./product-shopping-car/ProductShoppingCarReducer";
import {MenuReducer} from "./menu/MenuReducer";
export default combineReducers({
  category: CategoryReducer,
  product: ProductReducer,
  product_shopping_car: ProductShoppingCarReducer,
  menu: MenuReducer
})



