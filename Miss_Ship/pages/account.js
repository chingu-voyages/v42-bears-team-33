import React from 'react';
import { useSelector } from 'react-redux';
import { Tabs, Col } from 'antd';
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
          <AccountHeaderWrapper span={24}>
            <header>Welcome back!</header>
            <p>Join us to auto-text happy birthday message to your friends!</p>
          </AccountHeaderWrapper>

          <Col span={24}>
            <Tabs defaultActiveKey={focusTab} items={items} />
          </Col>
        </AccountWrapper>
      </AppLayout>
    </>
  );
};

export default Account;
