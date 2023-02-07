import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Divider } from 'antd';

import { OPEN_SCHEDULE_MODAL, OPEN_MESSAGE_NOW_MODAL, VISIBLE_ADD_FRIENDS } from '@reducers/schedule';
import { FriendsHeader } from '@style/friends/header';

const ListHeader = () => {
  const dispatch = useDispatch();
  const { friendsInfo, addFriendsVisible } = useSelector(state => state.schedule);

  const onClickSchedule = useCallback(() => {
    dispatch(OPEN_SCHEDULE_MODAL());
  }, []);

  const onClickMessageNow = useCallback(() => {
    dispatch(OPEN_MESSAGE_NOW_MODAL());
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

      {friendsInfo ? (
        <FriendsHeader friendsinfo={friendsInfo} addfriendsvisible={addFriendsVisible || undefined}>
          <header>Welcome to the Miss. Ship!</header>

          <p>
            Click / press{' '}
            <button type="button" onClick={onClickSchedule}>
              “Schedule a message”
            </button>{' '}
            to edit the message. The{' '}
            <button type="button" onClick={onClickMessageNow}>
              “Send Now”
            </button>
            is to send the message immediatelly.
          </p>
        </FriendsHeader>
      ) : (
        <FriendsHeader align="center" friendsinfo={friendsInfo} addfriendsvisible={addFriendsVisible || undefined}>
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
