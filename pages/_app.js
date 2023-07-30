import { Provider } from 'react-redux'
import store from "../app/store"
import Layout from './layout'
import '../styles/global.css';
import { QueryClient, QueryClientProvider } from 'react-query';


export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
  <Provider store={store}>
  <Component {...pageProps} />
  </Provider>
  </QueryClientProvider>
}
