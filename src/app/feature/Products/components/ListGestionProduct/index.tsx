import styles from "./styles.module.scss";
import {Button} from "../../../../shared/components/Button";

export const PrevGestionProduct = () => {
  const theme = 'light'
  console.log(styles)
  return (
    <div className={`${styles[theme + '__aside-content']}`}>
      <div className={`${styles[theme + '__preview']} px-44`}>
        <div className="">
          <Button type="btn-flat" color="btn-flat-primary">
            <span className="material-icons invert mr-5">
              arrow_right_alt
            </span>
            back
          </Button>
        </div>
        <div className="overflow-auto flex-1">
          <div className={`${styles[theme + '__preview__image-product']}`} style={{backgroundImage: `url('https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/semilla-aguacate.jpg.webp?itok=rB0CsQFA')`}} />
          <div className={`${styles[theme + '__preview__info']}`}>
            <span>name</span>
            <p>Avocado</p>
          </div>
          <div className={`${styles[theme + '__preview__info']}`}>
            <span>category</span>
            <p>Avocado</p>
          </div>
          <div className={`${styles[theme + '__preview__info']}`}>
            <span>note</span>
            <p>
              Nutrient-dense foods are those that provide substantial amounts of vitamins, minerals and other nutrients with relatively few calories. One-third of a medium avocado (50 g) has 80 calories and contributes nearly 20 vitamins and minerals, making it a great nutrient-dense food choice.
              Nutrient-dense foods are those that provide substantial amounts of vitamins, minerals and other nutrients with relatively few calories. One-third of a medium avocado (50 g) has 80 calories and contributes nearly 20 vitamins and minerals, making it a great nutrient-dense food choice.
            </p>
          </div>
        </div>
        <div className="py-34 flex justify-center">
          <Button type="btn-flat">
            delete
          </Button>
          <Button type="btn-primary"  >
            Add to list
          </Button>
        </div>
      </div>
    </div>
  )
}