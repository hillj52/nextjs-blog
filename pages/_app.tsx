import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/layout/layout';
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Component {...pageProps} />
  </Layout>    
);


export default App
