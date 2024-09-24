import {
  Routes,
  Route,
} from "react-router-dom";
import {ListPage} from "./Pages/ListPage";
import { Aside } from "../../ui/organisms/Aside";
import { AuthGuard } from "../Auth/Components/AuthGuard";


export const ProductsRouter = () => {
  return (
    <>
    <AuthGuard>
      <Routes>
        <Route
          path='*'
          element={<ListPage />}
        />
      </Routes>
      <Aside />
    </AuthGuard>
    </>
  )
}