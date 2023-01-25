import React from 'react';
import Head from 'next/head';

import AppLayout from '@components/AppLayout';

const Login = () => {
  return (
    <>
      <Head>
        <title>Login | Friendship Maintainer</title>
      </Head>

      <AppLayout>
        <div>Login Page</div>
      </AppLayout>
    </>
  );
};

export default Login;
