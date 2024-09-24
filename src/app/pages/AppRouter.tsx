import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {APP_ROUTES} from "./AppRoutes";
import { HeaderLeft } from "../components/ui/molecules/HeaderLeft";
import { HideGuard } from "../components/features/Auth/Components/HideGuard";

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <HideGuard>
         <HeaderLeft />
        </HideGuard>
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