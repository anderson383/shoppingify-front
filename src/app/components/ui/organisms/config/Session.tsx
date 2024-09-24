import {useCookies} from "react-cookie";
import {useEffect} from "react";


export const Session = () => {
  const [cookie, setCookie] = useCookies(['product_shopping_car'])

  const product_shopping_car = {
    list: [] as any
  }

  useEffect(() => {
    setCookie('product_shopping_car', JSON.stringify(product_shopping_car), {
      maxAge: 3600
    })

  }, [])

  return (
    <>

    </>
  )
}