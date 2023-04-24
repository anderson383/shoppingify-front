import { Link } from "react-router-dom"
import { ListDetailHistory } from "../components/ListDetailHistory"

export const DetailHistoryPage = () => {
  return (
    <>
      <main>
        <div className="container mt-57">
          <Link to="../" className="btn btn-flat btn-flat-primary" >
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

 