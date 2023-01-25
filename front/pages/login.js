import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import Router from 'next/router';
import Head from 'next/head';

import AppLayout from '@components/AppLayout';
import { LOG_IN_SUCCESS } from '@reducers/user';

const Login = () => {
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user);

  const onClickLogin = useCallback(() => {
    dispatch(LOG_IN_SUCCESS());
  }, []);

  useEffect(() => {
    if (me) Router.push('/friends');
  }, [me]);

  return (
    <>
      <Head>
        <title>Login | Friendship Maintainer</title>
      </Head>

      <AppLayout>
        <div>Login Page</div>
        <Button onClick={onClickLogin}>Log in</Button>
      </AppLayout>
    </>
  );
};

export default Login;
