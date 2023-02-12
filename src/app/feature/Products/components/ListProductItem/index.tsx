import styles from "./styles.module.scss";
import {Button} from "../../../../shared/components/Button";
import source from '../../../../../assets/img/source.svg'
import {TextField} from "../../../../shared/components/TextField";

export const ListGestionProduct = () => {
  const theme = 'light'
  console.log(styles)
  return (
    <div className={`${styles[theme + '__aside-content']}`}>
      <div className={`${styles[theme + '__list']}`}>
        <div className="px-44">
          <div className={`${styles[theme + '__list__header']} `}>
            <img  src={source} alt="source"/>
            <div>
              <h2>Didn't find what you need?</h2>
              <Button type="btn-md" color="btn-white">Add item</Button>
            </div>
          </div>
        </div>
        <div className="overflow-auto flex-1 mt-43 px-44">
          <div className="">
            <h2>Shopping list</h2>
          </div>
          <div className="">
            <div className="">
              <h4>Fruit and vegetables</h4>
              <ul className="">
                <li className="">
                  <span>Acocado</span>
                  <button>3 pcs</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-34 px-44 flex justify-center bg-white">
          <div className={`${styles[theme + '__search']} w100`}>
            <TextField inputProps={{ placeholder: 'Enter a name' }} />
            <Button type="btn-primary"  >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}