import styles from './styles.module.scss'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import { Product } from '../../../features/Products/models/Product';
import { Category } from '../../../features/Category/models/Category';
import { ProductShoppingCar } from '../../../features/ProductShoppingCar/models/ProductShoppingCar';
import { addProductShoppingCarSlice } from '../../../../core/redux/slices/ProductShoppingCard.slice';
import { handleMenuActionSlice } from '../../../../core/redux/slices/Menu.slices';


interface ItemProductProps {
  product: Product,
  category: Category;
  showCounter?: boolean;
}

export const ItemProduct:React.FC<ItemProductProps> = ({product, category, showCounter}) => {
  const dispatchRedux = useDispatch()
  const setShowMenu = (value:boolean) => dispatchRedux<any>( handleMenuActionSlice(value) )
  const addShoppingCar = () => {
    const productShoppingCar:ProductShoppingCar = {
      pcx: 1,
      product: {
        ...product,
        category
      }
    }
    dispatchRedux<any>(
      addProductShoppingCarSlice(productShoppingCar)
    )
  }

  const theme = 'light';
  return (
    <div className={`${styles[theme + '__card']}`}>
      <Link onClick={() => setShowMenu(true)} to={showCounter ? '' : ('/prev/'+ product.id) }>{product.name}</Link>
      {
        showCounter ? (
          <>
            <p className={`${styles[theme + '__counterProduct']}`} >{product?.list_history ? product?.list_history[0].pcx : ''} pcs</p>
          </>
        ) : (
          <span
            onClick={addShoppingCar}
            className={`${styles[theme + '__card__icon']} material-icons`}
          >add</span>
        )
      }
    </div>
  )
}