import styles from "./styles.module.scss";
import{useState} from "react";
import {ProductShoppingCar} from "../../../ProductShoppingCar/models/ProductShoppingCar";
import {useDispatch} from "react-redux";
import {
  deleteItemProductShoppingCar,
  editCantProductShoppingCar
} from "../../../../core/redux/actions/product-shopping-car/ProductShopppingCarAction";

interface ListCounterItemProps {
  shoppingCar: ProductShoppingCar
}

export const ListCounterItem:React.FC<ListCounterItemProps> = ({ shoppingCar }) => {
  const theme = 'light'
  const dispatchRedux = useDispatch()
  const [edit, setEdit] = useState<Boolean>(false)

  const resCounter = () => {
    if (shoppingCar.pcx > 1 ) {
      shoppingCar.pcx = shoppingCar.pcx - 1
      changeStatus(shoppingCar)
    }
  }

  const sumCounter = () => {
    shoppingCar.pcx = shoppingCar.pcx + 1
    changeStatus(shoppingCar)
  }

  const deleteItemShoppingCar = () => {
    dispatchRedux<any>(
      deleteItemProductShoppingCar(shoppingCar)
    )
  }

  const changeStatus = (productShoppingCar: ProductShoppingCar) => {
    dispatchRedux<any>(
      editCantProductShoppingCar(productShoppingCar)
    )
  }

  return (
    <div className={`${styles[theme + '__counter']} ${edit && styles[theme + '__counter__active']}`}>
      {
        edit && (
          <button onClick={deleteItemShoppingCar} className={`${styles[theme + '__counter__btn-trash']}`}>
            <span className="material-icons">
              delete
            </span>
          </button>
        )
      }
      {
        edit && (
        <button onClick={resCounter} className={`${styles[theme + '__counter__btn-operation']}`}>
          <span className="material-icons">
            remove
          </span>
          </button>
        )
      }
      <button className={`${styles[theme + '__counter__button-activator']} ${edit && styles[theme + '__counter__button-activator__active']} `} onClick={() => setEdit(!edit)}>
        { shoppingCar.pcx } pcs
      </button>
      {
        edit && (
          <button onClick={sumCounter} className={`${styles[theme + '__counter__btn-operation']}`}>
            <span className="material-icons">
              add
            </span>
          </button>
        )
      }
    </div>
  )
}