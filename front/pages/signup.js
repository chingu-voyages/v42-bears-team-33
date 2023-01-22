import React from 'react';
import Head from 'next/head';

import AppLayout from '@components/AppLayout';

const Signup = () => {
  return (
    <>
      <Head>
        <title>Sign Up | Friendship Maintainer</title>
      </Head>

      <AppLayout>
        <div>Signup Page</div>
      </AppLayout>
    </>
  );
};

export default Signup;
