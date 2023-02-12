import {ItemShoppingHistory} from "../ItemShoppingHistory";
import styles from './styles.module.scss'
import {useQuery} from "react-query";
import {getHistoryShoppingCar} from "../../../../core/api/shopping-car/ShoppingCarRepository";
import {HistoryShoppingCar} from "../../models/HistoryShoppingCar";

export const ListShoppingHistory = () => {
  const theme = 'light'

  const { data } = useQuery<HistoryShoppingCar[]>('HistoryShoppingCar', getHistoryShoppingCar)

  return (
    <>
      {
        data && data.map((item) => (
          <div>
            <div className={`${styles[theme + '__date']}`}>
              <p>{item.date}</p>
            </div>
            <div className="items">
              {
                item.shopping_car.map(shopping => (
                  <ItemShoppingHistory />
                ))
              }
            </div>
          </div>
        ))
      }
    </>
  )
}