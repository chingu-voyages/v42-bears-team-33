import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSession, signOut } from 'next-auth/react';
import { Row, Avatar, Space, Dropdown, Menu } from 'antd';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';

import ScheduleModal from '@components/Friends/ScheduleModal';
import { FOCUS_LOGIN_TAB, FOCUS_SIGN_UP_TAB, USER_LOGIN } from '@reducers/user';
import { Layout, LayoutInfo, LayoutHeaderProfile, LayoutHeaderBtn } from '@style/applayout';

const AppLayout = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { data: session, status } = useSession();
  const { me, focusTab } = useSelector(state => state.user);
  const { scheduleModalVisible } = useSelector(state => state.schedule);

  const onClickFirends = useCallback(() => {
    Router.push('/friends');
  }, []);

  const onClickLogin = useCallback(() => {
    if (focusTab === '2') dispatch(FOCUS_LOGIN_TAB());
  }, []);

  const onClickSignUp = useCallback(() => {
    if (focusTab === '1') dispatch(FOCUS_SIGN_UP_TAB());
  }, []);

  const onClickLogout = useCallback(() => {
    signOut({ callbackUrl: '/' });
  }, []);

  const menu = () => {
    return (
      <Menu>
        {router.pathname !== '/friends' && (
          <Menu.Item key="firends">
            <button type="button" onClick={onClickFirends}>
              Go to the Schedule Page
            </button>
          </Menu.Item>
        )}
        <Menu.Item key="logout">
          <button type="button" onClick={onClickLogout}>
            Log out
          </button>
        </Menu.Item>
      </Menu>
    );
  };

  useEffect(() => {
    if (status === 'authenticated' && !me) {
      dispatch(
        USER_LOGIN({
          nickname: session.user.name,
          email: session.user.email,
          image: session.user.image,
        }),
      );
    }
  }, [session, status, me]);

  return (
    <>
      <Layout justify="space-between">
        <Link href="/">
          <a>
            <LayoutInfo>
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/000/567/055/small/vector60-2428-01.jpg"
                alt="home logo"
              />
              <header>Miss.Ship</header>
            </LayoutInfo>
          </a>
        </Link>

        <Row>
          {me ? (
            <Dropdown overlay={menu} trigger="hover">
              <LayoutHeaderProfile>
                <Avatar src={me.image} alt="profile image" />
                <p>{me.nickname}</p>
              </LayoutHeaderProfile>
            </Dropdown>
          ) : (
            <Space>
              <Link href="/account">
                <a>
                  <LayoutHeaderBtn type="primary" size="large" onClick={onClickLogin}>
                    Log in
                  </LayoutHeaderBtn>
                </a>
              </Link>
              <Link href="/account">
                <a>
                  <LayoutHeaderBtn size="large" onClick={onClickSignUp}>
                    Sign up
                  </LayoutHeaderBtn>
                </a>
              </Link>
            </Space>
          )}
        </Row>
      </Layout>
      {children}

      {scheduleModalVisible && <ScheduleModal />}
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
