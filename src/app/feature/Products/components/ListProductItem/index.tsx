import styles from "./styles.module.scss";
import {Button} from "../../../../shared/components/Button";
import source from '../../../../../assets/img/source.svg'
import {TextField} from "../../../../shared/components/TextField";
import React from "react";
import {ListCounterItem} from "../ListCounterProduct";
import {ProductShoppingCar} from "../../../ProductShoppingCar/models/ProductShoppingCar";

interface ListProductItemProps {
  children?: any
  shoppingCar: ProductShoppingCar
}

export const ListProductItem:React.FC<ListProductItemProps> = ({ shoppingCar}) => {
  const theme = 'light'
  return (
    <li className={`${styles[theme + '__list-item']}`}>
        <span>{shoppingCar.product.name}</span>
        <ListCounterItem shoppingCar={shoppingCar} />
    </li>
  )
}