import React, { useEffect } from 'react';

import Head from 'next/head';

import AppLayout from '@components/AppLayout';
import ListHeader from '@components/Friends/ListHeader';
import ListTable from '@components/Friends/ListTable';
import { FriendsWrapper } from '@style/friends/header';
import { useDispatch, useSelector } from 'react-redux';
import { fbAuth } from 'javascripts/firebaseConfig';
import { USER_LOGIN } from '@reducers/user';

const Friends = () => {
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user);

  useEffect(() => {
    if (!me) {
      fbAuth.onAuthStateChanged(user => {
        if (user) {
          dispatch(
            USER_LOGIN({
              nickname: user.displayName,
              email: user.email,
              image: '',
            }),
          );
        }
      });
    }
  }, [me]);

  return (
    <>
      <Head>
        <title>Friends List | Friendship Maintainer</title>
      </Head>

      <AppLayout>
        <FriendsWrapper>
          <ListHeader />
          <ListTable />
        </FriendsWrapper>
      </AppLayout>
    </>
  );
};

export default Friends;
