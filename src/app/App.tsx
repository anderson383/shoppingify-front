import 'react-toastify/dist/ReactToastify.css';
import {AppRouter} from "./pages/AppRouter";
import {Provider} from "react-redux";
import { CookiesProvider } from 'react-cookie'
import {Session} from "./components/ui/organisms/config/Session";
import {ToastContainer} from "react-toastify";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { RepositoryIocProvider } from './services/config/context';
import store from './core/redux/store';

export const App = () => {
  const queryClient = new QueryClient()

  return (
    <RepositoryIocProvider>
      <QueryClientProvider client={queryClient}>
        <CookiesProvider>
          <Provider store={store}>
            <AppRouter />
            <Session />
            <ToastContainer
              theme="colored"
              position="bottom-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss={false}
              draggable={false}
              pauseOnHover={false}
            />
          </Provider>
        </CookiesProvider>
      </QueryClientProvider>
    </RepositoryIocProvider>
  )
}