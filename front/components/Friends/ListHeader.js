import React from 'react';
import Link from 'next/link';

import { FriendsHeader } from '@style/friends/header';

const ListHeader = () => {
  return (
    <FriendsHeader>
      <header>Welcome to the Friendship App!</header>

      <p>
        Click / press <button type="button">“Schedule a message”</button> to edit the message. The{' '}
        <Link href="/message">
          <a>“Send Now”</a>
        </Link>
        is to send the message immediatelly.
      </p>
    </FriendsHeader>
  );
};

export default ListHeader;
