import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';

import AppLayout from '@components/AppLayout';
import ListHeader from '@components/Friends/ListHeader';
import ListTable from '@components/Friends/ListTable';
import { FriendsWrapper } from '@style/friends/header';
import { LOAD_MY_INFO_SUCCESS } from '@reducers/user';

const Friends = () => {
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user);

  useEffect(() => {
    if (!me) {
      dispatch(LOAD_MY_INFO_SUCCESS());
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
