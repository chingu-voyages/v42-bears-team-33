import React from 'react';
import Head from 'next/head';

import AppLayout from '@components/AppLayout';

const Profile = () => {
  return (
    <>
      <Head>
        <title>Profile Page | Friendship Maintainer</title>
      </Head>

      <AppLayout>
        <div>Welcome !</div>
        <div>Profile Page</div>
      </AppLayout>
    </>
  );
};

export default Profile;
