import React from 'react';
import Head from 'next/head';

import AppLayout from '@components/AppLayout';
import ListHeader from '@components/Friends/ListHeader';
import { FriendsWrapper } from '@style/friends/header';

const Friends = () => {
  return (
    <>
      <Head>
        <title>Friends List | Friendship Maintainer</title>
      </Head>

      <AppLayout>
        <FriendsWrapper>
          <ListHeader />
        </FriendsWrapper>
      </AppLayout>
    </>
  );
};

export default Friends;
