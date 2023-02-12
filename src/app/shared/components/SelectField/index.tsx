import React from "react";
import styles from "./styles.module.scss";


interface ItemsIf {
  value: any,
  label: string,
  id: string
}

interface SelectFieldProps {
  id?:string
  label?:string
  inputProps?: any
  items: ItemsIf[]
  errors?: any
}




export const SelectField:React.FC<SelectFieldProps> = ({ id,label, inputProps, items, errors }) => {
  const theme = 'light'
  return (
    <div className={`${styles[theme + '__form-control']}`}>
      <label htmlFor={id}>{label}</label>
      <select id={id}  {...inputProps}>
        <option value="">Select category</option>
        {
          items.map(item => (
            <option key={item.id} value={item.value}>{item.label}</option>
          ))
        }
      </select>
      {errors && (
        <span className={`${styles[theme + '__message-error']}`} >
          {errors[inputProps.name]}
        </span>
      )
      }
    </div>
  )
}