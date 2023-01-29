import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSession, signOut } from 'next-auth/react';
import { Row, Avatar, Space, Button } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';

import ScheduleModal from '@components/Friends/ScheduleModal';
import { USER_LOGIN } from '@reducers/user';
import { Layout, LayoutInfo, LayoutHeaderProfile, LayoutHeaderBtn } from '@style/applayout';

const AppLayout = ({ children }) => {
  const dispatch = useDispatch();
  const { data: session, status } = useSession();
  const { me } = useSelector(state => state.user);
  const { scheduleModalVisible } = useSelector(state => state.schedule);

  useEffect(() => {
    if (status === 'authenticated' && !me) {
      dispatch(
        USER_LOGIN({
          nickname: session.user.name,
          email: session.user.email,
          image: session.user.image,
        }),
      );
    }
  }, [session, status, me]);

  return (
    <>
      <Layout justify="space-between">
        <Link href="/">
          <a>
            <LayoutInfo>
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/000/567/055/small/vector60-2428-01.jpg"
                alt="home logo"
              />
              <header>Friendship App</header>
            </LayoutInfo>
          </a>
        </Link>

        <Button onClick={() => signOut()}>로그아웃</Button>

        <Row>
          {me ? (
            <LayoutHeaderProfile>
              <Avatar src={me.image} alt="profile image" />
              <p>{me.nickname}</p>
            </LayoutHeaderProfile>
          ) : (
            <Space>
              <Link href="/account">
                <a>
                  <LayoutHeaderBtn type="primary" size="large">
                    Log in
                  </LayoutHeaderBtn>
                </a>
              </Link>
              <Link href="/account">
                <a>
                  <LayoutHeaderBtn size="large">Sign up</LayoutHeaderBtn>
                </a>
              </Link>
            </Space>
          )}
        </Row>
      </Layout>
      {children}

      {scheduleModalVisible && <ScheduleModal />}
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
