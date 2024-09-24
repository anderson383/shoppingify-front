import { AnalyticsRouter } from "../components/features/Analytics/pages/AnalyticsRouter"
import { AuthRouter } from "../components/features/Auth/AuthRouter"
import { HistoryRouter } from "../components/features/history/HistoryRouter"
import { ProductsRouter } from "../components/features/Products/ProductsRouter"

interface IAppRoutes {
  key: string
  path: string
  element: any
}

export const APP_ROUTES: IAppRoutes[] = [
  {
    key: 'auth',
    path: '/auth*',
    element: AuthRouter
  },
  {
    key: 'products',
    path: '/*',
    element: ProductsRouter
  },
  {
    key: 'history',
    path: 'history/*',
    element: HistoryRouter
  },
  {
    key: 'analytics',
    path: 'analytics/*',
    element: AnalyticsRouter
  }
]