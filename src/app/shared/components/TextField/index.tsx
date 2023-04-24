import styles from "./styles.module.scss";


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