import { useField } from "formik";
import styles from "./styles.module.scss";


interface TextFieldProps {
  id?:string
  name: string;
  label?:string
  inputProps?: any,
  className?: string,
}

export const TextField:React.FC<TextFieldProps> = ({ id,label, name, inputProps, className }) => {
  const theme = 'light'
  const [field, meta, helpers] = useField(name);
  
  return (
    <div className={`${styles[theme + '__form-control']} ${className}`}>
      { label && (<label htmlFor={id}>{label}</label>) }
      <input type="text" id={id}  {...inputProps} {...field} />
      {meta.error && (
          <span className={`${styles[theme + '__message-error']}`} >
            {meta.error}
          </span>
        )
      }
    </div>
  )
}