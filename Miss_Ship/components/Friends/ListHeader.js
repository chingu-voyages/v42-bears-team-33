import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Row } from 'antd';
import Link from 'next/link';

import { OPEN_SCHEDULE_MODAL } from '@reducers/schedule';
import { FriendsHeader } from '@style/friends/header';

const ListHeader = () => {
  const dispatch = useDispatch();
  const { friendsInfo } = useSelector(state => state.schedule);

  const onClickSchedule = useCallback(() => {
    dispatch(OPEN_SCHEDULE_MODAL());
  }, []);

  const onClickCreateBtn = useCallback(() => {
    console.log('친구 추가 모달 열기');
  }, []);

  return (
    <FriendsHeader>
      {friendsInfo ? (
        <>
          <header>Welcome to the Friendship App!</header>

          <p>
            Click / press{' '}
            <button type="button" onClick={onClickSchedule}>
              “Schedule a message”
            </button>{' '}
            to edit the message. The{' '}
            <Link href="/message">
              <a>“Send Now”</a>
            </Link>
            is to send the message immediatelly.
          </p>
        </>
      ) : (
        <>
          <Row>
            <img src="https://ifh.cc/g/VxB9AZ.png" alt="friends page header img" />
          </Row>

          <Row>
            <header>Create a new friend list and start scheduling greeting messages!</header>
          </Row>
          <Row>
            <Button type="primary" size="large" onClick={onClickCreateBtn}>
              Create Now
            </Button>
          </Row>
        </>
      )}
    </FriendsHeader>
  );
};

export default ListHeader;
