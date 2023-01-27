import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSession, signIn } from 'next-auth/react';
import { Button, Col, Divider, Tabs } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import Router from 'next/router';
import Head from 'next/head';

import AppLayout from '@components/AppLayout';
import LoginForm from '@components/Account/LoginForm';
import { AccountWrapper, AccountHeaderWrapper, AccountGoogleSignin } from '@style/account/accountHeader';

const Account = () => {
  const { me } = useSelector(state => state.user);
  const { data: session } = useSession();
  console.log(session);

  useEffect(() => {
    if (me) Router.push('/friends');
  }, [me]);

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

          <AccountGoogleSignin span={24}>
            <Button
              icon={<GoogleOutlined />}
              type="primary"
              onClick={() => signIn('google', { callbackUrl: '/listSetting' })}
            >
              Sign in with Google
            </Button>

            <Divider plain>OR</Divider>
          </AccountGoogleSignin>

          <Col span={24}>
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane tab="Log in" key="1">
                <LoginForm />
              </Tabs.TabPane>

              <Tabs.TabPane tab="Sign up" key="2">
                Sign Up
              </Tabs.TabPane>
            </Tabs>
          </Col>
        </AccountWrapper>
      </AppLayout>
    </>
  );
};

export default Account;
