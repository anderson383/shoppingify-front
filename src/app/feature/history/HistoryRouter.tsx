import {HeaderLeft} from "../../shared/components/HeaderLeft";
import {Route, Routes} from "react-router-dom";
import {HistoryPage} from "./pages/HistoryPage";
import {Aside} from "../../shared/components/Aside";


export const HistoryRouter = () => {

  return (
    <>
      <Routes>
        <Route path='*' element={<HistoryPage />} />
      </Routes>

      <Aside />
    </>
  )
}