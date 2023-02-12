import React from "react";
import styles from "../HeaderLeft/styles.module.scss";

interface NavListProps {
  children: any
}

export const NavList:React.FC<NavListProps> = ({ children }) => {
  const theme = 'light'
  return (
    <ul className={`${styles[theme + '__nav-list']}`}>
      {children}
    </ul>
  )
}