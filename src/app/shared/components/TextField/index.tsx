import React from "react";
import styles from "./styles.module.scss";
import {ErrorMessage} from "formik";

interface TextProps {
  name: any
  error: any,
  touched: boolean
  value: any
  setValue: () => void,
  setTouched: () => void,
}

interface TextFieldProps {
  id?:string
  label?:string
  inputProps?: any,
  className?: string,
  errors?: any
}

export const TextField:React.FC<TextFieldProps> = ({ id,label, errors, inputProps, className }) => {
  const theme = 'light'
  return (
    <div className={`${styles[theme + '__form-control']} ${className}`}>
      { label && (<label htmlFor={id}>{label}</label>) }
      <input type="text" id={id}  {...inputProps} />
      {errors && (
          <span className={`${styles[theme + '__message-error']}`} >
          {errors[inputProps.name]}
          </span>
        )
      }
    </div>
  )
}