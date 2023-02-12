import React from 'react';
import { Col } from 'antd';

import { LandingContentWrapper, LandingContentHeader, LandingContentFeature } from '@style/landing/content';

const LandingContent = () => {
  return (
    <LandingContentWrapper>
      <LandingContentHeader align="center">
        <Col>
          <header>Anytime greeting, anywhere texting, and every friend connected.</header>
        </Col>
      </LandingContentHeader>

      <LandingContentFeature>
        <Col xs={24} sm={14}>
          <h2>Send messages right away</h2>
          <p>
            Whether you&lsquo;re catching up with an old friend or chatting with a colleague, it&lsquo;s a great way to
            stay in touch with those around you. Send the messages today!
          </p>
        </Col>
        <Col xs={24} sm={10}>
          <img src="https://ifh.cc/g/DJQqZC.png" alt="service feature1" />
        </Col>
      </LandingContentFeature>

      <LandingContentFeature>
        <Col xs={24} sm={14}>
          <h2>Schedule a surprise message</h2>
          <p>
            Tell your friends something that will brighten their worlds. Add a joke, a sweet message, or even a surprise
            for extra special memories.
          </p>
        </Col>
        <Col xs={24} sm={10}>
          <img src="https://ifh.cc/g/zkXA9G.png" alt="service feature2" />
        </Col>
      </LandingContentFeature>

      <LandingContentFeature>
        <Col xs={24} sm={12}>
          <h2>Arrange friend list</h2>
          <p>
            Handle who you want to follow and how you can strengthen those connections. Bring a smile to their faces and
            make ordinary life special!
          </p>
        </Col>
        <Col xs={24} sm={12}>
          <img src="https://ifh.cc/g/f4K04j.png" alt="service feature3" />
        </Col>
      </LandingContentFeature>
    </LandingContentWrapper>
  );
};

export default LandingContent;
