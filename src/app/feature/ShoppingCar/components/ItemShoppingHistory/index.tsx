import styles from './styles.module.scss'

export const ItemShoppingHistory = () => {
  const theme = 'light'

  return (
    <>
      <div className={`${styles[theme + '__item']}`}>
        <p className={`${styles[theme + '__item__name']}`}>
          Grocery List
        </p>
        <div className={`${styles[theme + '__item__date-created']}`}>
          <span className="material-symbols-outlined">
          event_note
          </span>
          Mon 27.8.2020
        </div>
        <div className={`${styles[theme + '__item__status']}`}>
          <span>completed</span>
        </div>
        <div className={`${styles[theme + '__item__arrow-right']}`}>
          <span className="material-symbols-outlined">
            arrow_forward_ios
          </span>
        </div>
      </div>
    </>
  )
}