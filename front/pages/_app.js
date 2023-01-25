import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import 'antd/dist/antd.css';
import GlobalStyles from '@style/global';
import Theme from '@style/theme';
import wrapper from '../store/configureStore';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.any.isRequired,
};

export default wrapper.withRedux(App);
