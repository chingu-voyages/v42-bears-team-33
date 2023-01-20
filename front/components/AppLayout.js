import React from 'react';
import { Row, Button } from 'antd';
import PropTypes from 'prop-types';

const AppLayout = ({ children }) => {
  return (
    <>
      <Row>
        <Row>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/000/567/055/small/vector60-2428-01.jpg"
            alt="home logo"
          />
          <header>Friendship App</header>
        </Row>

        <Row>
          <Button type="primary" size="large">
            Log in
          </Button>
          <Button size="large">Sign up</Button>
        </Row>
      </Row>
      {children}
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
