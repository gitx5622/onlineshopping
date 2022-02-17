import { Provider } from 'react-redux';
import 'rsuite/dist/rsuite.min.css';
import { useStore } from '../state';
import '../styles/globals.css';
import Head from "next/head";

function Wamu({ Component, pageProps }) {
  const store = useStore();
  return (
      <Provider store={store}>
          <Head>
              <title>Wamu Online Shopping</title>
              <meta name="viewport" content="initial-scale=1, width=device-width" />
          </Head>
        <Component {...pageProps} />
      </Provider>
  );
}

export default Wamu;
