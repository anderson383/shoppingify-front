interface ToolTipProps {
  children?: any,
  type?: string,
  color?: string
}

export const Button:React.FC<ToolTipProps> = ({ children, type,color }) => {
  // const theme = 'light'

  const defaultClass = [
    'btn',
    type,
    color
  ]

  return (
    <>
      <button className={defaultClass.join(' ')}>
        {children}
      </button>
    </>
  )
}