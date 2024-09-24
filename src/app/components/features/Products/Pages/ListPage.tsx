import {useState, useEffect} from "react";
import {Category} from "../../Category/models/Category";
import {useDispatch, useSelector} from "react-redux";
import { StatusGeneral } from "../../../../core/redux/models/StatusGeneral";
import { listCategoryProducts } from "../../../../core/redux/actions/category/CategoryActions";
import { ItemCategory } from "../../../ui/molecules/ItemCategory";
import useAxiosInterceptor from "../../../../hooks/use-axios-interceptor";
interface ListPageProps {

}

function decodeJWT(token:string) {
  const parts = token.split('.'); 
  const payload = parts[1]; 
  return JSON.parse(atob(payload));
}

export const ListPage: React.FC<ListPageProps> = () => {
  useAxiosInterceptor()
  const dispatchRedux = useDispatch()
  const [decodedToken, setDecodedToken] = useState<{ full_name: string, last_name:string}>(null);
  const categories = useSelector((status:StatusGeneral) => (status.category.categories))
  const [categoryProducts, setCategoryProducts] = useState<Category[]>([])

  useEffect(() => {
    dispatchRedux<any>(listCategoryProducts())
  }, [dispatchRedux])

  useEffect(() => {

    const decoded = decodeJWT(localStorage.getItem('token'));
    setDecodedToken(decoded);
    setCategoryProducts(categories)
  }, [categories])

  return (
    <>
      <main>
        <div className="container mt-57">
          <div className="mb-57">
            <h1>Welcome back {decodedToken?.full_name} {decodedToken?.last_name}! <span className="text-primary">Shoppingify</span> allow you take your <br/> shopping list wherever you go</h1>
          </div>
          <div className="">
            {
              (categoryProducts || []).map(category =>
                <ItemCategory key={category.name} category={category}  />
              )
            }
          </div>
        </div>
      </main>
    </>
  )
}