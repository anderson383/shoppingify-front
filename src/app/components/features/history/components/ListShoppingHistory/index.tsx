import {ItemShoppingHistory} from "../ItemShoppingHistory";
import styles from './styles.module.scss'
import {useQuery} from "react-query";
import {HistoryShoppingCar} from "../../../ShoppingCar/models/HistoryShoppingCar";
import useShopRepository from "../../../../../hooks/repositories/useShopRepository";

export const ListShoppingHistory = () => {
  const theme = 'light'
  const shopRepository = useShopRepository()

  const { data:list } = useQuery<HistoryShoppingCar[]>('HistoryShoppingCar', shopRepository.getHistoryShoppingCar)
  
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