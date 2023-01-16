import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import 'antd/dist/antd.css';
import '@styles/variables.less';
import GlobalStyles from '@styles/global';
import Theme from '@styles/theme';

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

export default App;
