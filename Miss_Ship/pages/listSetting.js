import React from 'react';
import Head from 'next/head';

import AppLayout from '@components/AppLayout';
import { Steps } from 'antd';
import FriendSettingForm from '@components/Account/FriendSettingForm';

const ListSetting = () => {
  return (
    <>
      <Head>
        <title>Friends List Setting | Friendship Maintainer</title>
      </Head>

      <AppLayout>
        <Steps current={1}>
          <Steps.Step title="Register" />
          <Steps.Step title="Create Friends’ Birthday List" />
          <Steps.Step title="Done" />
        </Steps>

        <FriendSettingForm />
      </AppLayout>
    </>
  );
};

export default ListSetting;
