import React from 'react';
import { Row, Col, Button } from 'antd';
import { LandingContentDivider } from '@style/landing/content';

const LandingFooter = () => {
  return (
    <>
      <Row>
        <Col>
          <img
            src="http://skg1891.cafe24.com/wp-content/uploads/2013/11/dummy-image-square.jpg"
            alt="vision img"
          />
          <h2>1. Step</h2>
          <p>Ligula diam sem montes quis sed at adipiscing.</p>
          <LandingContentDivider />
        </Col>

        <Col>
          <img
            src="http://skg1891.cafe24.com/wp-content/uploads/2013/11/dummy-image-square.jpg"
            alt="vision img"
          />
          <h2>2. Step</h2>
          <p>Pellentesque viverra ante ipsum donec id ipsum risus posuere.</p>
          <LandingContentDivider />
        </Col>

        <Col>
          <img
            src="http://skg1891.cafe24.com/wp-content/uploads/2013/11/dummy-image-square.jpg"
            alt="vision img"
          />
          <h2>3. Step</h2>
          <p>Tortor egestas duis integer sodales eu in.</p>
          <LandingContentDivider />
        </Col>

        <Col>
          <img
            src="http://skg1891.cafe24.com/wp-content/uploads/2013/11/dummy-image-square.jpg"
            alt="vision img"
          />
          <h2>4. Step</h2>
          <p>Consectetur pulvinar sed cras et amet volutpat.</p>
        </Col>
      </Row>

      <Row>
        <Button type="primary">Start Now</Button>
      </Row>
    </>
  );
};

export default LandingFooter;
