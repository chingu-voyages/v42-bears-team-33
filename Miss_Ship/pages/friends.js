import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';

import AppLayout from '@components/AppLayout';
import ListHeader from '@components/Friends/ListHeader';
import ListTable from '@components/Friends/ListTable';
import { LOAD_USER } from '@reducers/user';
import { loadMyFriends, loadMyScheduleInfo, loadMySmsInfo } from '@actions/schedule';
import { FriendsWrapper } from '@style/friends/header';
import { fbAuth } from './api/auth/fBase';

const Friends = () => {
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user);
  const {
    friendsInfo,
    addFriendsDone,
    removeFriendDone,
    loadMyFriendsDone,
    sendMessageDone,
    schedulingDone,
    loadMyScheduleDone,
  } = useSelector(state => state.schedule);

  useEffect(() => {
    fbAuth.onAuthStateChanged(user => {
      if (!me && user) {
        dispatch(
          LOAD_USER({
            id: user?.uid,
            nickname: user?.displayName,
            email: user?.email,
            image: user?.photoURL,
          }),
        );
      }
    });
  }, []);

  useEffect(() => {
    if (me || addFriendsDone || removeFriendDone || sendMessageDone || schedulingDone) dispatch(loadMyFriends());
  }, [me, addFriendsDone, removeFriendDone, sendMessageDone, schedulingDone]);

  useEffect(() => {
    if (loadMyFriendsDone) dispatch(loadMyScheduleInfo());
  }, [loadMyFriendsDone]);

  useEffect(() => {
    if (loadMyScheduleDone) dispatch(loadMySmsInfo());
  }, [loadMyScheduleDone]);

  return (
    <>
      <Head>
        <title>Friends List | Friendship Maintainer</title>
      </Head>

      <AppLayout>
        <FriendsWrapper friendsInfo={friendsInfo?.length}>
          <ListHeader />
          <ListTable />
        </FriendsWrapper>
      </AppLayout>
    </>
  );
};

export default Friends;
