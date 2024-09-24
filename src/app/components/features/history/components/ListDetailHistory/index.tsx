import { useParams } from "react-router-dom"
import { useQuery } from "react-query"
import { Category } from "../../../Category/models/Category"
import styles from './styles.module.scss'
import { ItemCategory } from "../../../../ui/molecules/ItemCategory"
import useConfigRepository from "../../../../../hooks/repositories/useConfigRepository"

export const ListDetailHistory = () => {
  const params = useParams<{id:string}>()
  const configRepository = useConfigRepository()
  const {data} = useQuery('HistoryShoppingCar', () => configRepository.getCategoryListHistory(params.id as string))
  const theme = 'light'

  return (
    <>
      {
        data && (
          <>
            <h1>{data?.name}</h1>
            <p className={`${styles[theme + '__date']}`}>
              <span className="material-symbols-outlined">
                event_note
              </span>
              {data?.date}
            </p>

            <div className={`${styles[theme + '__content_categories']}`}>
              {
                data?.list_categories?.map((category) => (
                  <ItemCategory
                    key={category.id}
                    showCounter={true}
                    category={category}
                  />
                ))
              }
            </div>
          </>
        )
      }
    
    </>
  )
}