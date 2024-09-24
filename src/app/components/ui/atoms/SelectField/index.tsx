import { useField } from "formik";
import styles from "./styles.module.scss";


interface ItemsIf {
  value: any,
  label: string,
  id: string
}

interface SelectFieldProps {
  id?:string
  name: string;
  label?:string
  inputProps?: any
  items: ItemsIf[]
  errors?: any
}




export const SelectField:React.FC<SelectFieldProps> = ({ id,label, inputProps, items, errors, name }) => {
  const  [field, u, helpers] = useField(name)
  const theme = 'light'
  return (
    <div className={`${styles[theme + '__form-control']}`}>
      <label htmlFor={id}>{label}</label>
      <select id={id}  {...inputProps} onChange={(e) => helpers.setValue(e.target.value)} onBlur={() => helpers.setTouched(true)} value={field.value} >
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