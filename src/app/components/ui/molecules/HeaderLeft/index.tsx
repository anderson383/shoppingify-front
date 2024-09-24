import styles from './styles.module.scss'
import {NavItem} from "../NavItem";
import logo from '../../../../../assets/img/logo.svg'
import {useDispatch, useSelector} from "react-redux";
import { StatusGeneral } from '../../../../core/redux/models/StatusGeneral';
import { NavList } from '../../atoms/NavList';
import { ToolTip } from '../../atoms/ToolTip';
import { handleMenuActionSlice } from '../../../../core/redux/slices/Menu.slices';
export const HeaderLeft = () => {
  let theme = 'light'

  const dispatchRedux = useDispatch()


  const {menu: {showMenu}, product_shopping_car} = useSelector((status:StatusGeneral) => ({
    menu: status.menu,
    product_shopping_car: status.product_shopping_car
  }))


  const menu = [
    {
      icon: 'format_list_bulleted',
      tooltip: 'Items',
      path: '/'
    },
    {
      icon: 'replay',
      tooltip: 'history',
      path: '/history'
    },
    {
      icon: 'insert_chart_outlined',
      tooltip: 'statistics',
      path: '/analytics'
    }
  ]

  const setShowMenu = () => {
    dispatchRedux<any>(handleMenuActionSlice(!showMenu))
  }

  return (
    <>
      <header className={`${styles[theme + '__header']}`}>
        <div className="mt-50">
          <img src={logo} alt="Logo" />
        </div>
        <nav>
          <NavList>
            {
              menu.map((item, index) => (
                <ToolTip tooltip={item.tooltip} key={index}>
                  <NavItem className="mb-40" active path={item.path}>
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
         <button onClick={setShowMenu} className="bg-primary btn-rounded">
           <div className={`${styles[theme + '__cart-shopping__badge']}`}>{product_shopping_car.list.length}</div>
           <span className="material-icons">
              production_quantity_limits
            </span>
         </button>
        </div>
      </header>
    </>
  )
}