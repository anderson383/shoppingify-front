import styles from "./styles.module.scss";
import {Button} from "../../../../shared/components/Button";
import {Link, useParams} from "react-router-dom";
import {getOneProduct} from "../../../../core/api/product/ProductRepository";
import {Product} from "../../models/Product";
import {Loader} from "../../../../shared/components/Loader";
import {useFetch} from "../../../../hooks/useFetch";

export const PrevGestionProduct = () => {

  const params = useParams<{id:string}>()

  const { data: product, loading } = useFetch<Product>(
    getOneProduct,
    params.id,
    [params.id]
  )


  const theme = 'light'
  return (
    <>
      <Loader loading={loading} />
      <div className={`${styles[theme + '__aside-content']}`}>
        <div className={`${styles[theme + '__preview']} `}>
          <div className="px-44">
            <Link to="/products" className="btn btn-flat btn-flat-primary pl-0" >
              <span className="material-icons invert mr-5">
                arrow_right_alt
              </span>
              back
            </Link>
          </div>
          <div className="overflow-auto px-44 h-100">
            {
              product && (
                <>
                  <div className={`${styles[theme + '__preview__image-product']}`} style={{backgroundImage: `url(${product.image})`}} />
                  <div className={`${styles[theme + '__preview__info']}`}>
                    <span>name</span>
                    <p>{product.name}</p>
                  </div>
                  <div className={`${styles[theme + '__preview__info']}`}>
                    <span>category</span>
                    <p>{product.category?.name}</p>
                  </div>
                  <div className={`${styles[theme + '__preview__info']}`}>
                    <span>note</span>
                    <p>
                      {product.note}
                    </p>
                  </div>
                </>
              )
            }
          </div>
          <div className={`${styles[theme + '__preview__actions']} py-34 flex justify-center px-44`}>
            <Button type="btn-flat">
              delete
            </Button>
            <Button type="btn-primary"  >
              Add to list
            </Button>
          </div>
        </div>
      </div>
    </>

  )
}