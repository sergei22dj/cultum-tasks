import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
// local
import { theme } from '@md-styles/styled/theme';
import { GlobalStyles } from '@md-styles/styled/global';
// global css
import 'normalize.css/normalize.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Cultum Starter Kit</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
    <GlobalStyles />
  </>
);

export default MyApp;
