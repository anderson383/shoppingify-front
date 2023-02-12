import {
  BrowserRouter,
  Routes,
  Route, useLocation,
} from "react-router-dom";
import {HeaderLeft} from "./shared/components/HeaderLeft";
import {APP_ROUTES} from "./AppRoutes";
import {Aside} from "./shared/components/Aside";

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <HeaderLeft />
        <Routes>
          {
            APP_ROUTES.map(route => (
              <Route key={route.key} path={route.path} element={<route.element />} />
            ))
          }
        </Routes>
      </BrowserRouter>
    </>
  )
}