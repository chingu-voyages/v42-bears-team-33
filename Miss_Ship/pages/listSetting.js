import React from 'react';
import Head from 'next/head';
import { Steps } from 'antd';

import AppLayout from '@components/AppLayout';
import FriendSettingForm from '@components/Account/FriendSettingForm';
import { FriendSettingWrapper, FriendSettingHeader } from '@style/account/friendSettingForm';

const ListSetting = () => {
  return (
    <>
      <Head>
        <title>Friends List Setting | Friendship Maintainer</title>
      </Head>

      <AppLayout>
        <FriendSettingWrapper>
          <FriendSettingHeader current={1}>
            <Steps.Step title="Register" />
            <Steps.Step title="Create Friends’ Birthday List" />
            <Steps.Step title="Done" />
          </FriendSettingHeader>

          <FriendSettingForm />
        </FriendSettingWrapper>
      </AppLayout>
    </>
  );
};

export default ListSetting;
