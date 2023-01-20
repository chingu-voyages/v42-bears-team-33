import React from 'react';
import { Button, Row, Col } from 'antd';

const LandingHeader = () => {
  return (
    <>
      <Row>
        <Col>
          <h2>Auto-text happy birthday to friends</h2>
          <Button type="primary" size="large">
            Start Now
          </Button>
        </Col>

        <Col>
          <img src="https://ifh.cc/g/O1lgyS.png" alt="content img" />
        </Col>
      </Row>
    </>
  );
};

export default LandingHeader;
