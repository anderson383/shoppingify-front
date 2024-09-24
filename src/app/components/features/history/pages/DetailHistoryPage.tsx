import { Link } from "react-router-dom"
import { ListDetailHistory } from "../components/ListDetailHistory"
import useAxiosInterceptor from "../../../../hooks/use-axios-interceptor"

export const DetailHistoryPage = () => {
  useAxiosInterceptor()
  return (
    <>
      <main>
        <div className="container mt-57">
          <Link to="../" className="btn btn-flat btn-flat-primary pl-0" >
            <span className="material-icons invert mr-5">
              arrow_right_alt
            </span>
            back
          </Link>
          <ListDetailHistory />
        </div>
      </main>
    </>
  )
}

 