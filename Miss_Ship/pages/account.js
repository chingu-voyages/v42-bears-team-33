import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Tabs } from 'antd';
import Head from 'next/head';

import AppLayout from '@components/AppLayout';
import LoginForm from '@components/Account/LoginForm';
import SignupForm from '@components/Account/SignupForm';
import { AccountWrapper, AccountHeaderWrapper } from '@style/account/accountHeader';

const Account = () => {
  const { focusTab } = useSelector(state => state.user);

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
            <Tabs defaultActiveKey={focusTab}>
              <Tabs.TabPane tab="Log in" key="1">
                <LoginForm />
              </Tabs.TabPane>

              <Tabs.TabPane tab="Sign up" key="2">
                <SignupForm />
              </Tabs.TabPane>
            </Tabs>
          </Col>
        </AccountWrapper>
      </AppLayout>
    </>
  );
};

export default Account;
