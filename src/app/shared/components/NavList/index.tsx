import styles from "./styles.module.scss";

interface NavListProps {
  children: any
}

export const NavList:React.FC<NavListProps> = ({ children }) => {
  const theme = 'light'
  return (
    <nav className={`${styles[theme + '__nav-list']}`}>
      {children}
    </nav>
  )
}