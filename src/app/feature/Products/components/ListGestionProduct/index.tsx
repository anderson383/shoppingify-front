import styles from "./styles.module.scss";
import LoadingSvg  from "../../../../../assets/img/icons/Loading.svg"
import source from '../../../../../assets/img/source.svg'
import UnDrawShopping from '../../../../../assets/img/undraw_shopping.svg'
import {TextField} from "../../../../shared/components/TextField";
import {ListProductItem} from "../ListProductItem";
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {StatusGeneral} from "../../../../core/redux/models/StatusGeneral";
import {useEffect, useState} from "react";
import {ProductShoppingCar} from "../../../ProductShoppingCar/models/ProductShoppingCar";
import {useFormik} from "formik";
import * as Yup from "yup";
import { toast } from 'react-toastify';
import {ShoppingCar} from "../../../ShoppingCar/models/ShoppingCar";
import {resetAllProductShoppingCar} from "../../../../core/redux/actions/product-shopping-car/ProductShopppingCarAction";
import {saveProductShoppingCar} from "../../../../core/api/product-shopping-car/ProductShoppingCarRepository";

export const ListGestionProduct = () => {
  const dispatchRedux = useDispatch()
  const [loading, setLoading] = useState<boolean>(false)
  const [listRender, setListRender] = useState<Array<any>>([])
  const productShoppingCar = useSelector((status: StatusGeneral) => (status.product_shopping_car.list))
  const form = useFormik({
    initialValues: {
      name: ''
    },
    onSubmit: async (values) => {
      const payload:ShoppingCar = {
        name: values.name,
        products: productShoppingCar.map(item => ({
          pcx: item.pcx,
          product: item.product.id
        }))
      }
      toast("Your list has been saved");
      setLoading(true)
      await saveProductShoppingCar(payload)
      dispatchRedux<any>(resetAllProductShoppingCar())
      form.resetForm()
      setLoading(false)
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
    })
  })


  useEffect(() => {
    const groupProducts = () => {
      if (productShoppingCar) {
        setListRender(
          productShoppingCar.reduce((prev:Array<any>, curren) => {
            let found = prev.find((item:any) => item.id === curren.product.category?.id)
            if (found)  found.products = [...found.products, curren]
            else prev = [...prev, { ...curren.product.category, products: [curren] }]
            return prev
          }, [])
        )
      }
    }
    groupProducts()



  }, [productShoppingCar])


  const theme = 'light'
  return (
    <div className={`${styles[theme + '__aside-content']}`}>
      <div className={`${styles[theme + '__list']}`}>
        <div className="px-44">
          <div className={`${styles[theme + '__list__header']} `}>
            <img  src={source} alt="source"/>
            <div>
              <h2>Didn't find what you need?</h2>
              <Link to="add" className="btn btn-md btn-white">Add item</Link>
            </div>
          </div>
        </div>

        <div className={`${styles[theme + '__list__body']}`}>
          {
            listRender.length ? (
              <>
                <div className="">
                  <h2>Shopping list</h2>
                </div>
                <div className="">
                  {
                    listRender.map((item) => (
                      <div className="" key={item.id}>
                        <h4>{item.name}</h4>
                        <ul className="list-none">
                          {
                            item.products && item.products.map((shoppingCar:ProductShoppingCar) => (
                              <ListProductItem shoppingCar={shoppingCar} key={shoppingCar.product.id} />
                            ))
                          }
                        </ul>
                      </div>
                    ))
                  }
                </div>
              </>
            ) : (
              <div className={`${styles[theme + '__no-items']}`}>
                <p >No items</p>
              </div>
            )
          }

        </div>
        <div className={`${styles[theme + '__list__action']}`}>
          {
            !listRender.length && (
              <section>
                <img src={UnDrawShopping} alt={UnDrawShopping} className={`${styles[theme + '__un-draw-shopping']}`} />
              </section>
            )
          }
          <form className={`${styles[theme + '__search']} w100`}  onSubmit={form.handleSubmit} >
            <TextField
              errors={form.errors}
              inputProps={{
                placeholder: 'Enter a name',
                name: 'name',
                value: form.values.name,
                onChange: form.handleChange,
              }} />
            <button type="submit" className="btn btn-primary" >
              {
                loading ? <img src={LoadingSvg} alt={LoadingSvg} width={30} /> : 'Save'
              }
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}