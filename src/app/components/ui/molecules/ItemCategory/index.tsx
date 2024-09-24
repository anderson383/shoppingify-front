import { Category } from '../../../features/Category/models/Category';
import { ItemProduct } from '../../atoms/ItemProduct';
import styles from './styles.module.scss'




interface ItemProductProps {
  category: Category,
  showCounter?: boolean;
}

export const ItemCategory:React.FC<ItemProductProps> = ({ category, showCounter }) => {
  const theme = 'light';
  return (
    <div className={`${styles[theme + '__seccion']}`}>
      <div className="mb-18">
        <h2>{category.name}</h2>
      </div>
      <div className={`${styles[theme + '__seccion__list']}`}>
        {
          category.products && category.products.map(product =>
            <ItemProduct
              key={product.id}
              product={product}
              category={{ id: category.id, name: category.name }}
              showCounter={showCounter}
            />
          )
        }
      </div>
    </div>
  )
}