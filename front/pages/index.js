import React from 'react';
import Head from 'next/head';

import AppLayout from '@components/AppLayout';
import LandingHeader from '@components/Landing/LandingHeader';
import LandingContent from '@components/Landing/LandingContent';

const Home = () => {
  return (
    <>
      <Head>
        <title>Friendship Maintainer</title>
      </Head>

      <AppLayout>
        <LandingHeader />
        <LandingContent />
      </AppLayout>
    </>
  );
};

export default Home;
