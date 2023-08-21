import { Toaster } from 'react-hot-toast';

import { Layout } from '@/components';

import StateProvider from '@/context/StateProvider';

import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <StateProvider>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateProvider>
  );
}
