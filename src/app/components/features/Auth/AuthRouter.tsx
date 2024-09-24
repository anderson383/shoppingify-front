import {
  Routes,
  Route,
} from "react-router-dom";
import { Aside } from "../../ui/organisms/Aside";
import { LoginPage } from "./Pages/Login";


export const AuthRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path='login'
          element={<LoginPage />}
        />
      </Routes>
    </>
  )
}