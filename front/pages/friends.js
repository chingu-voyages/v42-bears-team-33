import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import AppLayout from '@components/AppLayout';

const Friends = () => {
  return (
    <>
      <Head>
        <title>Friends List | Friendship Maintainer</title>
      </Head>

      <AppLayout>
        <header>Welcome to the Friendship App!</header>
        <p>
          Click / press <button type="button">“Schedule a message”</button> to
          edit the message. The{' '}
          <Link href="/message">
            <a>“Send Now”</a>
          </Link>
          is to send the message immediatelly.
        </p>
      </AppLayout>
    </>
  );
};

export default Friends;
