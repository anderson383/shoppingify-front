import styles from './styles.module.scss'

import {Product} from "../../../feature/Products/models/Product";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addProductShoppingCar} from "../../../core/redux/actions/product-shopping-car/ProductShopppingCarAction";
import {ProductShoppingCar} from "../../../feature/ProductShoppingCar/models/ProductShoppingCar";
import {Category} from "../../../feature/Category/models/Category";


interface ItemProductProps {
  product: Product,
  category: Category;
  showCounter?: boolean;
}

export const ItemProduct:React.FC<ItemProductProps> = ({product, category, showCounter}) => {
  const dispatchRedux = useDispatch()
  const addShoppingCar = () => {
    const productShoppingCar:ProductShoppingCar = {
      pcx: 1,
      product: {
        ...product,
        category
      }
    }
    dispatchRedux<any>(
      addProductShoppingCar(productShoppingCar)
    )
  }

  const theme = 'light';
  return (
    <div className={`${styles[theme + '__card']}`}>
      <Link to={'prev/'+ product.id}>{product.name}</Link>
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