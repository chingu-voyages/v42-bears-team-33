import React from 'react';
import Head from 'next/head';

import AppLayout from '@components/AppLayout';

const ListSetting = () => {
  return (
    <>
      <Head>
        <title>Friends List Setting | Friendship Maintainer</title>
      </Head>

      <AppLayout>
        <div>회원가입 완료 후</div>
        <div>여기페이지로 이동</div>
      </AppLayout>
    </>
  );
};

export default ListSetting;
