import styles from './styles.module.scss'

import React from "react";
import {Product} from "../../../feature/Products/models/Product";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addProductShoppingCar} from "../../../core/redux/actions/product-shopping-car/ProductShopppingCarAction";
import {ProductShoppingCar} from "../../../feature/ProductShoppingCar/models/ProductShoppingCar";
import {listCategoryProducts} from "../../../core/redux/actions/category/CategoryActions";
import {Category} from "../../../feature/Category/models/Category";


interface ItemProductProps {
  product: Product,
  category: Category
}

export const ItemProduct:React.FC<ItemProductProps> = ({product, category}) => {
  const dispatchRedux = useDispatch()
  const addShoppingCar = () => {
    const productShoppingCar:ProductShoppingCar = {
      pcx: 1,
      product: {
        ...product,
        category
      }
    }
    dispatchRedux<any>(
      addProductShoppingCar(productShoppingCar)
    )
  }

  const theme = 'light';
  return (
    <div className={`${styles[theme + '__card']}`}>
      <Link to={'prev/'+ product.id}>{product.name}</Link>
      <span onClick={addShoppingCar} className={`${styles[theme + '__card__icon']} material-icons`}>add</span>
    </div>
  )
}