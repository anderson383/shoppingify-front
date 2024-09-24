import styles from './styles.module.scss'
import { ShoppingCar } from '../../../ShoppingCar/models/ShoppingCar'
import { useNavigate } from 'react-router-dom'

interface ItemShoppingHistoryProps  {
  shopping: ShoppingCar
}

export const ItemShoppingHistory:React.FC<ItemShoppingHistoryProps> = (props) => {
  const navigate = useNavigate()
  const { shopping } = props

  const theme = 'light'

  return (
    <>
      <div className={`${styles[theme + '__item']}`} onClick={() => navigate('./' + shopping.id)}>
        <p className={`${styles[theme + '__item__name']}`}>
          {shopping.name}
        </p>
        <div className={`${styles[theme + '__item__info']}`}>
          <div className={`${styles[theme + '__item__date-created']}`}>
            <span className="material-symbols-outlined">
            event_note
            </span>
            {shopping.datehistory}
          </div>
          <div className={`${styles[theme + '__item__status']}`}>
            <span>{shopping.status?.toLowerCase()}</span>
          </div>
          <div className={`${styles[theme + '__item__arrow-right']}`}>
            <span className="material-symbols-outlined">
              arrow_forward_ios
            </span>
          </div>
        </div>
      </div>
    </>
  )
}