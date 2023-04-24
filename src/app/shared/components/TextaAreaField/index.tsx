import styles from "./styles.module.scss";

interface TextAreaFieldProps {
  id?:string
  label?:string
  inputProps?: any
}

export const TextAreaField:React.FC<TextAreaFieldProps> = ({ id,label, inputProps }) => {
  const theme = 'light'
  return (
    <div className={`${styles[theme + '__form-control']}`}>
      <label htmlFor={id}>{label}</label>
      <textarea id={id}  {...inputProps} />
    </div>
  )
}