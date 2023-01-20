import React from 'react';
import { Row } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { Layout, LayoutInfo, LayoutHeaderBtn } from '@style/applayout';

const AppLayout = ({ children }) => {
  return (
    <>
      <Layout justify="space-between">
        <Link href="/">
          <a>
            <LayoutInfo>
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/000/567/055/small/vector60-2428-01.jpg"
                alt="home logo"
              />
              <header>Friendship App</header>
            </LayoutInfo>
          </a>
        </Link>

        <Row>
          <Link href="/login">
            <a>
              <LayoutHeaderBtn first type="primary" size="large">
                Log in
              </LayoutHeaderBtn>
            </a>
          </Link>
          <Link href="/signup">
            <a>
              <LayoutHeaderBtn size="large">Sign up</LayoutHeaderBtn>
            </a>
          </Link>
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
