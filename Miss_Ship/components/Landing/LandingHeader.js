import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'antd';
import Link from 'next/link';

import { LandingWrapper, LandingHeaderInfo } from '@style/landing/header';

const LandingHeader = () => {
  const { me } = useSelector(state => state.user);
  return (
    <>
      <LandingWrapper align="middle" justify="space-between">
        <LandingHeaderInfo>
          <h1>
            Auto-text happy
            <br /> birthday to friends
          </h1>
          <Link href={me ? '/friends' : '/account'}>
            <a>
              <Button type="primary" size="large">
                Start Now
              </Button>
            </a>
          </Link>
        </LandingHeaderInfo>

        <LandingHeaderInfo>
          <img src="https://ifh.cc/g/O1lgyS.png" alt="content img" />
        </LandingHeaderInfo>
      </LandingWrapper>
    </>
  );
};

export default LandingHeader;
