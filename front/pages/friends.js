import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import AppLayout from '@components/AppLayout';
import { FriendsWrapper, FriendsHeader } from '@style/friends/header';

const Friends = () => {
  return (
    <>
      <Head>
        <title>Friends List | Friendship Maintainer</title>
      </Head>

      <AppLayout>
        <FriendsWrapper>
          <FriendsHeader>
            <header>Welcome to the Friendship App!</header>

            <span>
              Click / press <button type="button">“Schedule a message”</button>{' '}
              to edit the message. The{' '}
              <Link href="/message">
                <a>“Send Now”</a>
              </Link>
              is to send the message immediatelly.
            </span>
          </FriendsHeader>
        </FriendsWrapper>
      </AppLayout>
    </>
  );
};

export default Friends;
