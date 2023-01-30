import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row } from 'antd';
import Link from 'next/link';

import { FOCUS_LOGIN_TAB } from '@reducers/user';
import { FooterWrapper, FooterContent, FooterContentInfo, FooterDivider, FooterBtn } from '@style/landing/footer';

const LandingFooter = () => {
  const dispatch = useDispatch();
  const { me, focusTab } = useSelector(state => state.user);

  const onClickLogin = useCallback(() => {
    if (focusTab === '2') dispatch(FOCUS_LOGIN_TAB());
  }, []);

  return (
    <FooterWrapper>
      <FooterContent align="center">
        <FooterContentInfo>
          <div>
            <img src="http://skg1891.cafe24.com/wp-content/uploads/2013/11/dummy-image-square.jpg" alt="vision img" />
            <h2>1. Step</h2>
            <p>Ligula diam sem montes quis sed at adipiscing.</p>
          </div>
        </FooterContentInfo>
        <FooterDivider />

        <FooterContentInfo>
          <div>
            <img src="http://skg1891.cafe24.com/wp-content/uploads/2013/11/dummy-image-square.jpg" alt="vision img" />
            <h2>2. Step</h2>
            <p>Pellentesque viverra ante ipsum donec id ipsum risus posuere.</p>
          </div>
        </FooterContentInfo>
        <FooterDivider />

        <FooterContentInfo>
          <div>
            <img src="http://skg1891.cafe24.com/wp-content/uploads/2013/11/dummy-image-square.jpg" alt="vision img" />
            <h2>3. Step</h2>
            <p>Tortor egestas duis integer sodales eu in.</p>
          </div>
        </FooterContentInfo>
        <FooterDivider />

        <FooterContentInfo lastchild="true">
          <div>
            <img src="http://skg1891.cafe24.com/wp-content/uploads/2013/11/dummy-image-square.jpg" alt="vision img" />
            <h2>4. Step</h2>
            <p>Consectetur pulvinar sed cras et amet volutpat.</p>
          </div>
        </FooterContentInfo>
      </FooterContent>

      <Row align="center">
        <Link href={me ? '/friends' : '/account'}>
          <a>
            <FooterBtn type="primary" size="large" onClick={onClickLogin}>
              Start Now
            </FooterBtn>
          </a>
        </Link>
      </Row>
    </FooterWrapper>
  );
};

export default LandingFooter;
