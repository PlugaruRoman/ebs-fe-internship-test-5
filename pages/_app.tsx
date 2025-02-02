import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { InformerProvider } from 'context/contextes';

import 'styles/globals.scss';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }) => {
  return (
    <InformerProvider>
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>informer</title>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap' />
          <link
            href='https://unpkg.com/leaflet@1.9.1/dist/leaflet.css'
            integrity='sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14='
          />
        </Head>
        <NextNProgress />
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </InformerProvider>
  );
};

export default MyApp;
