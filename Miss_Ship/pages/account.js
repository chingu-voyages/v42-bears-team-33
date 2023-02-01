import React from 'react';
import { useSelector } from 'react-redux';
import { Tabs, Row, Col } from 'antd';
import Head from 'next/head';

import AppLayout from '@components/AppLayout';
import LoginForm from '@components/Account/LoginForm';
import SignupForm from '@components/Account/SignupForm';
import { AccountWrapper, AccountHeaderWrapper } from '@style/account/accountHeader';

const Account = () => {
  const { focusTab } = useSelector(state => state.user);

  const items = [
    { label: 'Log in', key: '1', children: <LoginForm /> },
    { label: 'Sign up', key: '2', children: <SignupForm /> },
  ];

  return (
    <>
      <Head>
        <title>Manage Account | Friendship Maintainer</title>
      </Head>

      <AppLayout>
        <AccountWrapper>
          <AccountHeaderWrapper>
            <header>Welcome back!</header>
            <p>Join us to auto-text happy birthday message to your friends!</p>
          </AccountHeaderWrapper>

          <Row align="center">
            <Col span={24}>
              <Tabs defaultActiveKey={focusTab} items={items} />
            </Col>
          </Row>
        </AccountWrapper>
      </AppLayout>
    </>
  );
};

export default Account;
