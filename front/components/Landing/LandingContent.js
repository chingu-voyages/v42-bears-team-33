import React from 'react';
import { Row, Col, Divider } from 'antd';

const LandingContent = () => {
  return (
    <>
      <Row>
        <Col>
          <h2>Our Vision</h2>
          <p>Anytime greeting, anywhere texting, and every friend connected.</p>
          <img
            src="http://skg1891.cafe24.com/wp-content/uploads/2013/11/dummy-image-square.jpg"
            alt="vision img"
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>Features</h2>
          <Divider />
        </Col>

        <Col>
          <h3>Feature 1</h3>
          <p>
            Quisque molestie augue neque aenean mattis imperdiet quam suscipit
            purus. Mattis cras orci convallis volutpat felis viverra consequat.
          </p>
          <img
            src="http://skg1891.cafe24.com/wp-content/uploads/2013/11/dummy-image-square.jpg"
            alt="feature img1"
          />
        </Col>

        <Col>
          <h3>Feature 2</h3>
          <p>
            Quisque molestie augue neque aenean mattis imperdiet quam suscipit
            purus. Mattis cras orci convallis volutpat felis viverra consequat.
          </p>
          <img
            src="http://skg1891.cafe24.com/wp-content/uploads/2013/11/dummy-image-square.jpg"
            alt="feature img2"
          />
        </Col>

        <Col>
          <h3>Feature 3</h3>
          <p>
            Quisque molestie augue neque aenean mattis imperdiet quam suscipit
            purus. Mattis cras orci convallis volutpat felis viverra consequat.
          </p>
          <img
            src="http://skg1891.cafe24.com/wp-content/uploads/2013/11/dummy-image-square.jpg"
            alt="feature img3"
          />
        </Col>
      </Row>
    </>
  );
};

export default LandingContent;
