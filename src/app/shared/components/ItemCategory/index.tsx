import styles from './styles.module.scss'

import React from "react";


interface ItemProductProps {

}

export const ItemProduct:React.FC<ItemProductProps> = () => {
  const theme = 'light';
  return (
    <div className={`${styles[theme + '__card']}`}>
      <p>Hola xd</p>
      <span className={`${styles[theme + '__card__icon']} material-icons`}>add</span>
    </div>
  )
}