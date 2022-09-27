import Layout from '../components/Layout';
import { InformerProvider } from '../utils';
import '../styles/globals.scss';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => {
  return (
    <InformerProvider>
      <Layout>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap' />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </InformerProvider>
  );
};

export default MyApp;
