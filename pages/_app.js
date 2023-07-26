// _app.js

import Head from 'next/head';
import { Fragment } from 'react';
import 'tailwindcss/tailwind.css';
import '@fontsource/raleway'; 

import GlobalStyles from '../styles/GlobalStyles'; 

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Cooking app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
