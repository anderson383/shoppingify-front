import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {ListPage} from "./Pages/ListPage";
import {HeaderLeft} from "../../shared/components/HeaderLeft";
import {Aside} from "../../shared/components/Aside";


export const ProductsRouter = () => {
  return (
    <>
      <Routes>
        <Route path='*' element={<ListPage />} />
      </Routes>
      <Aside />
    </>
  )
}