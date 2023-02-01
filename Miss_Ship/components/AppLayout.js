import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSession, signOut } from 'next-auth/react';
import { Row, Avatar, Space, Dropdown, Menu } from 'antd';
import Router from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';

import ScheduleModal from '@components/Friends/ScheduleModal';
import { fbAuth } from 'javascripts/firebaseConfig';
import { FOCUS_LOGIN_TAB, FOCUS_SIGN_UP_TAB, USER_LOGIN, USER_LOGOUT } from '@reducers/user';
import { Layout, LayoutInfo, LayoutHeaderProfile, LayoutHeaderMenu, LayoutHeaderBtn } from '@style/applayout';

const AppLayout = ({ children }) => {
  const dispatch = useDispatch();

  const { data: session, status } = useSession();
  const { focusTab, me } = useSelector(state => state.user);
  const { scheduleModalVisible } = useSelector(state => state.schedule);

  const onClickLogin = useCallback(() => {
    if (focusTab === '2') dispatch(FOCUS_LOGIN_TAB());
  }, []);

  const onClickSignUp = useCallback(() => {
    if (focusTab === '1') dispatch(FOCUS_SIGN_UP_TAB());
  }, []);

  const onClickLogout = useCallback(async () => {
    await signOut({ callbackUrl: '/' });
    await fbAuth.signOut();
    await dispatch(USER_LOGOUT());
    Router.push('/');
  }, []);

  const menu = () => {
    return (
      <LayoutHeaderMenu>
        <Menu.Item key="goProfile">
          <button
            type="button"
            onClick={() => {
              console.log('Go to your profile page');
            }}
          >
            Go to profile
          </button>
        </Menu.Item>

        <Menu.Item key="logout" danger>
          <button type="button" onClick={onClickLogout}>
            Log out
          </button>
        </Menu.Item>
      </LayoutHeaderMenu>
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
            <Dropdown overlay={menu} trigger="click">
              <a>
                <LayoutHeaderProfile>
                  <Avatar src={me.image} alt="profile image" />
                  <p>{me.nickname}</p>
                </LayoutHeaderProfile>
              </a>
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
