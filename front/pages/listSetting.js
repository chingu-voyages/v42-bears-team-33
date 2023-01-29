import React, { useEffect } from 'react';
import Head from 'next/head';
import { useSession } from 'next-auth/react';

import { USER_LOGIN } from '@reducers/user';

import AppLayout from '@components/AppLayout';
import { useDispatch } from 'react-redux';

const ListSetting = () => {
  const dispatch = useDispatch();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      dispatch(
        USER_LOGIN({
          nickname: session.user.name,
          email: session.user.email,
          image: session.user.image,
        }),
      );
    }
  }, [session]);

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
