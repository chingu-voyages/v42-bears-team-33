import React from 'react';
import { Row } from 'antd';
import PropTypes from 'prop-types';

import { Layout, LayoutInfo, LayoutHeaderBtn } from '@style/applayout';

const AppLayout = ({ children }) => {
  return (
    <>
      <Layout justify="space-between">
        <LayoutInfo>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/000/567/055/small/vector60-2428-01.jpg"
            alt="home logo"
          />
          <header>Friendship App</header>
        </LayoutInfo>

        <Row>
          <LayoutHeaderBtn first type="primary" size="large">
            Log in
          </LayoutHeaderBtn>
          <LayoutHeaderBtn size="large">Sign up</LayoutHeaderBtn>
        </Row>
      </Layout>
      {children}
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
