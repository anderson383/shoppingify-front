import useAxiosInterceptor from "../../../../hooks/use-axios-interceptor";
import {ListShoppingHistory} from "../components/ListShoppingHistory";


export const HistoryPage = () => {
  useAxiosInterceptor()
  return (
    <>
      <main>
        <div className="container mt-57">
          <div className="mb-57">
            <h1>Shopping history</h1>
          </div>
          <div className="">
            <ListShoppingHistory />
          </div>
        </div>
      </main>
  </>)
}