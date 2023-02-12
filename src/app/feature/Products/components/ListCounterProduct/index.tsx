import styles from "./styles.module.scss";
import {Button} from "../../../../shared/components/Button";
import source from '../../../../../assets/img/source.svg'
import {TextField} from "../../../../shared/components/TextField";
import React from "react";

interface ListProductItemProps {

}

export const ListProductItem:React.FC<ListProductItemProps> = () => {
  const theme = 'light'
  return (
    <li className={`${styles[theme + '__list-item']}`}>
        <span>Chicken 1kg </span>


    </li>
  )
}