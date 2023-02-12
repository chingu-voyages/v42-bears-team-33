import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Avatar, Space, Dropdown, Menu } from 'antd';
import { ClockCircleFilled, LogoutOutlined } from '@ant-design/icons';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';

import ScheduleModal from '@components/Friends/ScheduleModal';
import { logout } from '@actions/user';
import { FOCUS_LOGIN_TAB, FOCUS_SIGN_UP_TAB } from '@reducers/user';
import {
  Layout,
  LayoutLogo,
  LayoutHeaderProfile,
  LayoutHeaderMenu,
  LayoutHeaderBtn,
  DropdownGlobal,
} from '@style/applayout';

const AppLayout = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { focusTab, me } = useSelector(state => state.user);
  const { scheduleModalVisible } = useSelector(state => state.schedule);

  const onClickLogin = useCallback(() => {
    if (focusTab === '2') dispatch(FOCUS_LOGIN_TAB());
  }, []);

  const onClickSignUp = useCallback(() => {
    if (focusTab === '1') dispatch(FOCUS_SIGN_UP_TAB());
  }, []);

  const onClickLogout = useCallback(() => {
    Router.push(router.pathname === '/' ? '/' : '/account');
    dispatch(logout());
  }, []);

  const menu = () => {
    return (
      <LayoutHeaderMenu>
        <Menu.Item key="logout" danger icon={<LogoutOutlined />} onClick={onClickLogout}>
          Log out
        </Menu.Item>
      </LayoutHeaderMenu>
    );
  };

  return (
    <>
      <DropdownGlobal />
      <Layout justify="space-between">
        <Link href="/">
          <a>
            <LayoutLogo src="https://ifh.cc/g/0SaTtF.png" alt="home logo" />
          </a>
        </Link>

        <Row>
          {me ? (
            <Space size="middle">
              <Link href="/friends">
                <a>
                  <LayoutHeaderBtn schedule="true" type="primary" icon={<ClockCircleFilled />}>
                    Schedule &nbsp;<span className="now-button-text">Now!</span>
                  </LayoutHeaderBtn>
                </a>
              </Link>

              <Dropdown overlay={menu} trigger="hover">
                <a>
                  <LayoutHeaderProfile>
                    <Avatar
                      src={
                        me.image
                          ? me.image
                          : 'https://cdn.discordapp.com/attachments/1058927333584678982/1070695898578948158/header_user-profile_placeholder.png'
                      }
                      alt="profile image"
                    />
                    <p>{me.nickname}</p>
                  </LayoutHeaderProfile>
                </a>
              </Dropdown>
            </Space>
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
