import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Divider } from 'antd';

import {
  VISIBLE_ADD_FRIENDS,
  OPEN_ANONYMOUS_SCHEDULE_MODAL,
  OPEN_ANONYMOUS_MESSAGE_NOW_MODAL,
} from '@reducers/schedule';
import { FriendsHeader } from '@style/friends/header';

const ListHeader = () => {
  const dispatch = useDispatch();
  const { friendsInfo, addFriendsVisible } = useSelector(state => state.schedule);

  const onClickAnonymousSchedule = useCallback(() => {
    dispatch(OPEN_ANONYMOUS_SCHEDULE_MODAL());
  }, []);

  const onClickAnonymousMessageNow = useCallback(() => {
    dispatch(OPEN_ANONYMOUS_MESSAGE_NOW_MODAL());
  }, []);

  const onClickCreateBtn = useCallback(() => {
    dispatch(VISIBLE_ADD_FRIENDS());
  }, []);

  return (
    <>
      {addFriendsVisible && (
        <FriendsHeader friendsinfo="true">
          <header>Welcome to the Miss. Ship!</header>
          <p>
            <button type="button">Build friendships</button> with your friends by{' '}
            <button type="button">adding new ones!</button>
          </p>
        </FriendsHeader>
      )}

      {friendsInfo?.length !== 0 ? (
        <FriendsHeader friendsinfo={friendsInfo?.length} $addfriendsvisible={addFriendsVisible}>
          <header>Welcome to the Miss. Ship!</header>

          <p>
            Click / press{' '}
            <button type="button" onClick={onClickAnonymousSchedule}>
              “Schedule a message”
            </button>{' '}
            to edit the message. The{' '}
            <button type="button" onClick={onClickAnonymousMessageNow}>
              “Send Now”
            </button>
            is to send the message immediatelly.
          </p>
        </FriendsHeader>
      ) : (
        <FriendsHeader friendsinfo={friendsInfo?.length} $addfriendsvisible={addFriendsVisible}>
          <img src="https://ifh.cc/g/VxB9AZ.png" alt="friends page header img" />

          <header>Create a new friend list and start scheduling greeting messages!</header>
          <Button type="primary" onClick={onClickCreateBtn}>
            Create Now
          </Button>

          <Divider />
        </FriendsHeader>
      )}
    </>
  );
};

export default ListHeader;
