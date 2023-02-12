import styles from './styles.module.scss'
import {NavList} from "../NavList";
import {NavItem} from "../NavItem";
import React from "react";
import {ToolTip} from "../ToolTip";

import logo from '../../../../assets/img/logo.svg'
export const HeaderLeft = () => {
  let theme = 'light'
  
  const menu = [
    {
      icon: 'format_list_bulleted',
      tooltip: 'Items'
    },
    {
      icon: 'replay',
      tooltip: 'history'
    },
    {
      icon: 'insert_chart_outlined',
      tooltip: 'statistics'
    }
  ]
  return (
    <>
      <header className={`${styles[theme + '__header']}`}>
        <div className="mt-50">
          <img src={logo} alt="Logo" />
        </div>
        <nav>
          <NavList>
            {
              menu.map(item => (
                <ToolTip tooltip={item.tooltip}>
                  <NavItem className="mb-40" active>
                  <span className="material-icons">
                    {item.icon}
                  </span>
                  </NavItem>
                </ToolTip>
              ))
            }
          </NavList>
        </nav>
        <div className={`${styles[theme + '__cart-shopping']}`}>
         <button className="bg-primary btn-rounded">
           <div className={`${styles[theme + '__cart-shopping__badge']}`}>3</div>
           <span className="material-icons">
              production_quantity_limits
            </span>
         </button>
        </div>
      </header>
    </>
  )
}