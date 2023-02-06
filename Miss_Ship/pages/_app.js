import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { CookiesProvider } from 'react-cookie';

import 'antd/dist/antd.css';
import GlobalStyles from '@style/global';
import Theme from '@style/theme';
import wrapper from '../store/configureStore';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <CookiesProvider>
        <GlobalStyles />

        <ThemeProvider theme={Theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </CookiesProvider>
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.any.isRequired,
};

export default wrapper.withRedux(App);
