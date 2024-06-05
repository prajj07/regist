// pages/_app.tsx
import { Provider } from 'eact-redux';
import store from '../src/lib/store/store';
import RootLayout from '../components/UI/RootLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </Provider>
  );
}

export default MyApp;