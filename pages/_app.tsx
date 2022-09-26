import Layout from '../components/Layout';
import { InformerProvider } from '../utils';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <InformerProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </InformerProvider>
  );
};

export default MyApp;
