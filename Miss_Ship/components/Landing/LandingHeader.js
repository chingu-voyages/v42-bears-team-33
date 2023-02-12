import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import Link from 'next/link';

import { FOCUS_LOGIN_TAB } from '@reducers/user';
import { LandingWrapper, LandingHeaderInfo } from '@style/landing/header';

const LandingHeader = () => {
  const dispatch = useDispatch();
  const { me, focusTab } = useSelector(state => state.user);

  const onClickLogin = useCallback(() => {
    if (focusTab === '2') dispatch(FOCUS_LOGIN_TAB());
  }, []);

  return (
    <>
      <LandingWrapper align="middle" justify="space-between">
        <LandingHeaderInfo span={12}>
          <header>
            Auto-text happy
            <br /> birthday to friends
          </header>
          <Link href={me ? '/friends' : '/account'}>
            <a>
              <Button type="primary" size="large" onClick={onClickLogin}>
                Start Now
              </Button>
            </a>
          </Link>
        </LandingHeaderInfo>

        <LandingHeaderInfo span={12}>
          <img
            src="https://cdn.discordapp.com/attachments/1058927333584678982/1074212249440370728/banner-image.png"
            alt="content img"
          />
        </LandingHeaderInfo>
      </LandingWrapper>
    </>
  );
};

export default LandingHeader;
