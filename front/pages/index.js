import React from 'react';
import Head from 'next/head';

import AppLayout from '@components/AppLayout';
import LandingHeader from '@components/Landing/LandingHeader';

const Home = () => {
  return (
    <>
      <Head>
        <title>Friendship Maintainer</title>
      </Head>

      <AppLayout>
        <LandingHeader />
      </AppLayout>
    </>
  );
};

export default Home;
