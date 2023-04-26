import { AnalyticsRouter } from "./feature/Analytics/pages/AnalyticsRouter";
import {ProductsRouter} from "./feature/Products/ProductsRouter";
import {HistoryRouter} from "./feature/history/HistoryRouter";

interface IAppRoutes {
  key: string
  path: string
  element: any
}

export const APP_ROUTES: IAppRoutes[] = [
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