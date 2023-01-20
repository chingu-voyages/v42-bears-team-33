import React from 'react';
import Head from 'next/head';

import AppLayout from '@components/AppLayout';

const Home = () => {
  return (
    <>
      <Head>
        <title>Friendship Maintainer</title>
      </Head>

      <AppLayout>
        <div>Frontend Setup</div>
      </AppLayout>
    </>
  );
};

export default Home;
