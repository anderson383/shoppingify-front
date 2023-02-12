import * as React from "react";
import styles from "./styles.module.scss";
import {NavLink, useMatch, useResolvedPath} from "react-router-dom";

type NavItemProps = {
  children?: any,
  active?: boolean,
  path: string,
  className?: string
}

export const NavItem:React.FC<NavItemProps> = ({ children,  active, path, className }) => {
  const theme = 'light'

  let resolved = useResolvedPath(path);
  let match = useMatch({ path: resolved.pathname, end: false });

  return (
    <NavLink to={path}   className={`${styles[theme + '__item']} ${className}`}>
      {
        match && (<div className={`${active && styles[theme + '__item__active']}`} />)
      }
      {children}
    </NavLink>
  )
}