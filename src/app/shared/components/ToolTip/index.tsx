import React from "react";
import styles from "./styles.module.scss";

interface ToolTipProps {
  children: any
  tooltip: string
}

export const ToolTip:React.FC<ToolTipProps> = ({ children, tooltip }) => {
  const theme = 'light'
  return (
    <div className={`${styles[theme + '__tooltip']}`}>
      <div className={`${styles[theme + '__tooltip__content']}`}>{tooltip}</div>
      {children}
    </div>
  )
}