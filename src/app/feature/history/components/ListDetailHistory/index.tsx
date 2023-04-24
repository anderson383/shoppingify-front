import { useParams } from "react-router-dom"
import { ItemCategory } from "../../../../shared/components/ItemCategory"
import { useQuery } from "react-query"
import { getCategoryListHistory } from "../../../../core/api/category/CategoryRepository"
import { Category } from "../../../Category/models/Category"
import styles from './styles.module.scss'

export const ListDetailHistory = () => {
  const params = useParams<{id:string}>()
  const {data} = useQuery<{name: string, date:string, list_categories: Category[]}>('HistoryShoppingCar', () => getCategoryListHistory(params.id as string))
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