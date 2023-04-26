import {Route, Routes} from "react-router-dom";
import { Aside } from "../../../shared/components/Aside";


export const AnalyticsRouter = () => {

  return (
    <>
      <Routes>
        <Route path='*' element={<>
        <main>
        <div className="container mt-57">
          <div className="mb-57">
            <h1><span className="text-primary">Page</span> no implemented</h1>
          </div>
          </div>
        </main>
        </>} />
      </Routes>
      <Aside />
    </>
  )
}