import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

import { FOCUS_LOGIN_TAB } from '@reducers/user';
import { FooterWrapper, FooterStep, FooterBtn } from '@style/landing/footer';

const LandingFooter = () => {
  const dispatch = useDispatch();
  const { me, focusTab } = useSelector(state => state.user);

  const onClickLogin = useCallback(() => {
    if (focusTab === '2') dispatch(FOCUS_LOGIN_TAB());
  }, []);

  return (
    <FooterWrapper align="center">
      <FooterStep xs={12} sm={12} md={12} lg={6} xl={6}>
        <img src="https://ifh.cc/g/5C8adY.png" alt="footer step1" />
        <header>1. Missing</header>
        <p>
          Feel like you want to reconnect with someone? <br />
          (register the service)
        </p>
      </FooterStep>

      <FooterStep xs={12} sm={12} md={12} lg={6} xl={6}>
        <img src="https://ifh.cc/g/YCOv5h.png" alt="footer step2" />
        <header>2. Setting</header>
        <p>
          Be prepared and anchor at the right port today. <br /> (pick a friend)
        </p>
      </FooterStep>

      <FooterStep xs={12} sm={12} md={12} lg={6} xl={6}>
        <img src="https://ifh.cc/g/sdmlBr.png" alt="footer step3" />
        <header>3. Stuffing</header>
        <p>
          Well-equipped the goods from one place to another. <br />
          (download your thoughts)
        </p>
      </FooterStep>

      <FooterStep xs={12} sm={12} md={12} lg={6} xl={6}>
        <img src="https://ifh.cc/g/JVndF7.png" alt="footer step4" />
        <header>4. Shipping</header>
        <p>
          The ship is ready at the port to set sail! Let&lsquo;s get going! <br />
          (ready for a voyage)
        </p>
      </FooterStep>

      <Link href={me ? '/friends' : '/account'}>
        <a>
          <FooterBtn type="primary" size="large" onClick={onClickLogin}>
            Start Now
          </FooterBtn>
        </a>
      </Link>
    </FooterWrapper>
  );
};

export default LandingFooter;
