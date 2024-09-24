import { useField } from "formik";
import styles from "./styles.module.scss";

interface TextAreaFieldProps {
  id?:string
  label?:string
  inputProps?: any
  name: string
}

export const TextAreaField:React.FC<TextAreaFieldProps> = ({ id,label, inputProps, name }) => {
  const theme = 'light'
  const [field, meta, helpers] = useField(name);
  return (
    <div className={`${styles[theme + '__form-control']}`}>
      <label htmlFor={id}>{label}</label>
      <textarea id={id}  {...inputProps} {...field} />
    </div>
  )
}