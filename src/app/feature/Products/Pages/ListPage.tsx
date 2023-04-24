import {useState, useEffect} from "react";
import {ItemCategory} from "../../../shared/components/ItemCategory";
import {Category} from "../../Category/models/Category";
import {useDispatch, useSelector} from "react-redux";
import {listCategoryProducts} from "../../../core/redux/actions/category/CategoryActions";
import {StatusGeneral} from "../../../core/redux/models/StatusGeneral";


interface ListPageProps {

}

export const ListPage: React.FC<ListPageProps> = () => {
  const dispatchRedux = useDispatch()
  const categories = useSelector((status:StatusGeneral) => (status.category.categories))
  const [categoryProducts, setCategoryProducts] = useState<Category[]>([])

  useEffect(() => {
    dispatchRedux<any>(listCategoryProducts())
  }, [])

  useEffect(() => {
    setCategoryProducts(categories)
  }, [categories])



  return (
    <>
      <main>
        <div className="container mt-57">
          <div className="mb-57">
            <h1><span className="text-primary">Shoppingify</span> allow you take your <br/> shopping list wherever you go</h1>
          </div>
          <div className="">
            {
              categoryProducts.map(category =>
                <ItemCategory key={category.name} category={category}  />
              )
            }
          </div>
        </div>
      </main>
    </>
  )
}