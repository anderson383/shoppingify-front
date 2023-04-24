import {Route, Routes} from "react-router-dom";
import {HistoryPage} from "./pages/HistoryPage";
import {Aside} from "../../shared/components/Aside";
import { DetailHistoryPage } from "./pages/DetailHistoryPage";


export const HistoryRouter = () => {

  return (
    <>
      <Routes>
        <Route path='*' element={<HistoryPage />} />
        <Route path=":id" element={<DetailHistoryPage />} />
      </Routes>
      <Aside />
    </>
  )
}