import React from 'react';
import { useSelector } from 'react-redux';
import { signOut } from 'next-auth/react';
import { Row, Avatar, Space, Button } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { Layout, LayoutInfo, LayoutHeaderProfile, LayoutHeaderBtn } from '@style/applayout';
import ScheduleModal from '@components/Friends/ScheduleModal';

const AppLayout = ({ children }) => {
  const { me } = useSelector(state => state.user);
  const { scheduleModalVisible } = useSelector(state => state.schedule);

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
