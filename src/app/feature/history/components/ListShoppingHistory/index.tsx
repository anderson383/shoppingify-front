import {ItemShoppingHistory} from "../ItemShoppingHistory";
import styles from './styles.module.scss'
import {useQuery} from "react-query";
import {getHistoryShoppingCar} from "../../../../core/api/shopping-car/ShoppingCarRepository";
import {HistoryShoppingCar} from "../../../ShoppingCar/models/HistoryShoppingCar";

export const ListShoppingHistory = () => {
  const theme = 'light'

  const { data:list } = useQuery<HistoryShoppingCar[]>('HistoryShoppingCar', getHistoryShoppingCar)
  
  return (
    <>
      {
        Array.isArray(list) && list?.map((item) => (
          <div key={item.date}>
            <div className={`${styles[theme + '__date']}`}>
              <p>{item.date}</p>
            </div>
            <div className="items">
              {
                item?.history_list?.map(shopping => (
                  <ItemShoppingHistory shopping={shopping} key={shopping.id}  />
                ))
              }
            </div>
          </div>
        ))
      }
    </>
  )
}