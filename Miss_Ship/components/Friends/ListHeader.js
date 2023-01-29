import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

import { OPEN_SCHEDULE_MODAL } from '@reducers/schedule';
import { FriendsHeader } from '@style/friends/header';

const ListHeader = () => {
  const dispatch = useDispatch();

  const onClickSchedule = useCallback(() => {
    dispatch(OPEN_SCHEDULE_MODAL());
  }, []);

  return (
    <FriendsHeader>
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
    </FriendsHeader>
  );
};

export default ListHeader;
