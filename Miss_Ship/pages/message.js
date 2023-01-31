import React from 'react';
import Head from 'next/head';

import AppLayout from '@components/AppLayout';

const Message = () => {
  return (
    <>
      <Head>
        <title>Send Message | Friendship Maintainer</title>
      </Head>

      <AppLayout>
        <div>Message Page</div>
      </AppLayout>
    </>
  );
};

export default Message;
