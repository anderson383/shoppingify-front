import React from "react";
import styles from "./styles.module.scss";

interface TextFieldProps {
  id?:string
  label?:string
  inputProps?: any
}

export const TextField:React.FC<TextFieldProps> = ({ id,label, inputProps }) => {
  const theme = 'light'
  return (
    <div className={`${styles[theme + '__form-control']}`}>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id}  {...inputProps} />
    </div>
  )
}