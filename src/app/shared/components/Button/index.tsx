import React from "react";
import styles from "./styles.module.scss";

interface ToolTipProps {
  children: any
}

export const ToolTip:React.FC<ToolTipProps> = ({ children }) => {
  const theme = 'light'

  const defaultClass = [
    'btn-primary'
  ]

  return (
    <>
      <button className={defaultClass.join(' ')}>
        {children}
      </button>
    </>
  )
}