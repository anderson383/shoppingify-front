import styles from './styles.module.scss'

import {useEffect} from "react";

import {FormGestionProduct} from "../../../feature/Products/components/FormGestionProduct";
import {PrevGestionProduct} from "../../../feature/Products/components/PrevGestionProduct";
import {ListGestionProduct} from "../../../feature/Products/components/ListGestionProduct";
import {Route, Routes, useLocation} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {useDeviceSize} from "../../../hooks/useDeviceSize";
import {useDispatch, useSelector} from "react-redux";
import {StatusGeneral} from "../../../core/redux/models/StatusGeneral";
import {handleMenu} from "../../../core/redux/actions/menu/MenuAction";

export const Aside = () => {
  let theme = 'light'
  const dispatchRedux = useDispatch()
  let location = useLocation();
  const { isMobile } = useDeviceSize(1023)
  const {showMenu} = useSelector((status:StatusGeneral) => status.menu)

  const clasesMenu = [ !showMenu ? styles[theme + '__aside__close'] : '' ]
  const setShowMenu = (value:boolean) => dispatchRedux<any>( handleMenu(value) )

  useEffect(()=> {
    if (isMobile) {
      setShowMenu(false)
    }
  }, [isMobile])

  return (
    <>
      <aside className={`${styles[theme + '__aside']} ${clasesMenu}`}>
        
          <TransitionGroup className={`h-100`} >
            <CSSTransition
              timeout={200}
              classNames={`page-transition`}
              key={location.pathname}
            >
              <Routes location={location}>
                <Route path="*" element={<ListGestionProduct />} />
                <Route path="prev/:id" element={<PrevGestionProduct />} />
                <Route path="add" element={<FormGestionProduct />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
      </aside>
    </>
  )
}