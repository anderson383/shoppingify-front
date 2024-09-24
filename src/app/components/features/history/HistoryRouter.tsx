import {Route, Routes} from "react-router-dom";
import {HistoryPage} from "./pages/HistoryPage";
import { DetailHistoryPage } from "./pages/DetailHistoryPage";
import { Aside } from "../../ui/organisms/Aside";
import { AuthGuard } from "../Auth/Components/AuthGuard";


export const HistoryRouter = () => {

  return (
    <>
    <AuthGuard>
      <Routes>
        <Route path='*' element={<HistoryPage />} />
        <Route path=":id" element={<DetailHistoryPage />} />
      </Routes>
      <Aside />
    </AuthGuard>
    </>
  )
}