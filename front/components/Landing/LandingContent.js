import React from 'react';
import { Row } from 'antd';

import {
  ContentWrapper,
  LandingContentHeader,
  LandingContentDivider,
  FeaturesWrapper,
  LandingFeatures,
} from '@style/landing/content';

const LandingContent = () => {
  return (
    <ContentWrapper>
      <Row align="center">
        <LandingContentHeader>
          <h2>Our Vision</h2>
          <p>Anytime greeting, anywhere texting, and every friend connected.</p>
          <img
            src="http://skg1891.cafe24.com/wp-content/uploads/2013/11/dummy-image-square.jpg"
            alt="vision img"
          />
        </LandingContentHeader>
      </Row>

      <Row align="center">
        <LandingContentHeader>
          <h2>Features</h2>
          <LandingContentDivider />
        </LandingContentHeader>
      </Row>

      <FeaturesWrapper align="center">
        <LandingFeatures>
          <div>
            <h3>Feature 1</h3>
            <p>
              Quisque molestie augue neque aenean mattis imperdiet quam suscipit
              purus. Mattis cras orci convallis volutpat felis viverra
              consequat.
            </p>
          </div>

          <img
            src="http://skg1891.cafe24.com/wp-content/uploads/2013/11/dummy-image-square.jpg"
            alt="feature img1"
          />
        </LandingFeatures>

        <LandingFeatures>
          <div>
            <h3>Feature 2</h3>
            <p>
              Quisque molestie augue neque aenean mattis imperdiet quam suscipit
              purus. Mattis cras orci convallis volutpat felis viverra
              consequat.
            </p>
          </div>

          <img
            src="http://skg1891.cafe24.com/wp-content/uploads/2013/11/dummy-image-square.jpg"
            alt="feature img2"
          />
        </LandingFeatures>

        <LandingFeatures>
          <div>
            <h3>Feature 3</h3>
            <p>
              Quisque molestie augue neque aenean mattis imperdiet quam suscipit
              purus. Mattis cras orci convallis volutpat felis viverra
              consequat.
            </p>
          </div>
          <img
            src="http://skg1891.cafe24.com/wp-content/uploads/2013/11/dummy-image-square.jpg"
            alt="feature img3"
          />
        </LandingFeatures>
      </FeaturesWrapper>
    </ContentWrapper>
  );
};

export default LandingContent;
