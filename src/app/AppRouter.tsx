import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {HeaderLeft} from "./shared/components/HeaderLeft";
import {APP_ROUTES} from "./AppRoutes";

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <HeaderLeft />
        <Routes>
          {
            APP_ROUTES.map(route => (
              <Route key={route.key} path={route.path} element={<route.element />}  />
            ))
          }
        </Routes>
      </BrowserRouter>
    </>
  )
}