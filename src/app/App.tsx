import 'react-toastify/dist/ReactToastify.css';
import {AppRouter} from "./AppRouter";
import {Provider} from "react-redux";
import {store} from "./core/redux/store";
import { CookiesProvider } from 'react-cookie'
import {Session} from "./shared/config/Session";
import {ToastContainer} from "react-toastify";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

export const App = () => {
  const queryClient = new QueryClient()

  return (
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
  )
}