import styles from "./styles.module.scss";
import {Link, useParams} from "react-router-dom";
import {Product} from "../../models/Product";
import { useDispatch } from "react-redux";
import { ProductShoppingCar } from "../../../ProductShoppingCar/models/ProductShoppingCar";
import { useNavigate} from 'react-router-dom'
import { useFetch } from "../../../../../hooks/useFetch";
import { Loader } from "../../../../ui/molecules/Loader";
import useShopRepository from "../../../../../hooks/repositories/useShopRepository";
import { addProductShoppingCarSlice } from "../../../../../core/redux/slices/ProductShoppingCard.slice";
export const PrevGestionProduct = () => {
  const navigate = useNavigate()
  const params = useParams<{id:string}>()
  const dispatchRedux = useDispatch()

  const shopRepository = useShopRepository()
  const { data: product, loading } = useFetch<Product>(
    shopRepository.getOneProduct,
    params.id,
    [params.id]
  )
  
  const addShoppingCar = () => {
    if (product) {
      const productShoppingCar:ProductShoppingCar = {
        pcx: 1,
        product: {
          ...product
        }
      }
      dispatchRedux<any>(
        addProductShoppingCarSlice(productShoppingCar)
      )
      navigate('../')
    }
  }


  const theme = 'light'
  return (
    <>
      <Loader loading={loading} />
      <div className={`${styles[theme + '__aside-content']}`}>
        <div className={`${styles[theme + '__preview']} `}>
          <div className="px-44">
            <Link to="../" className="btn btn-flat btn-flat-primary pl-0" >
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
            {/* <button className="btn btn-flat" disabled>
              delete
            </button> */}
            <button onClick={() => addShoppingCar()} className="btn btn-primary">
              Add to list
            </button>
          </div>
        </div>
      </div>
    </>

  )
}