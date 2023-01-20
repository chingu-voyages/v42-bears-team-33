import React from 'react';
import { Button } from 'antd';

import { LandingWrapper, LandingHeaderInfo } from '@style/landing/header';

const LandingHeader = () => {
  return (
    <>
      <LandingWrapper align="middle" justify="space-between">
        <LandingHeaderInfo>
          <h1>
            Auto-text happy
            <br /> birthday to friends
          </h1>
          <Button type="primary" size="large">
            Start Now
          </Button>
        </LandingHeaderInfo>

        <LandingHeaderInfo>
          <img src="https://ifh.cc/g/O1lgyS.png" alt="content img" />
        </LandingHeaderInfo>
      </LandingWrapper>
    </>
  );
};

export default LandingHeader;
