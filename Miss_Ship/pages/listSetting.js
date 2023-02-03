import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Steps, Result, Button } from 'antd';
import Router from 'next/router';
import Head from 'next/head';

import AppLayout from '@components/AppLayout';
import FriendSettingForm from '@components/Account/FriendSettingForm';
import { USER_LOGIN } from '@reducers/user';
import { ADD_SCHEDUL_INIT } from '@reducers/schedule';
import { FriendSettingWrapper, FriendSettingHeader } from '@style/account/friendSettingForm';
import { fbAuth } from './api/auth/fBase';

const ListSetting = () => {
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user);
  const { addSchedulDone } = useSelector(state => state.schedule);

  const onClickSuccessBtn = useCallback(() => {
    dispatch(ADD_SCHEDUL_INIT());
    Router.push('/friends');
  }, []);

  useEffect(() => {
    fbAuth.onAuthStateChanged(user => {
      if (!me && user) {
        dispatch(
          USER_LOGIN({
            id: user?.uid,
            nickname: user?.displayName,
            email: user?.email,
            image: user?.photoURL,
            myToken: user?.accessToken,
          }),
        );
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>Friends List Setting | Friendship Maintainer</title>
      </Head>

      <AppLayout>
        <FriendSettingWrapper>
          <FriendSettingHeader current={addSchedulDone ? 2 : 1}>
            <Steps.Step title="Register" />
            <Steps.Step title="Create Friends’ Birthday List" />
            <Steps.Step title="Done" />
          </FriendSettingHeader>

          {addSchedulDone ? (
            <Result
              status="success"
              title="Sign up Successfully!"
              subTitle={
                <div>
                  Redirecting to the main page...
                  <br />
                  If the loading time is too long, try the button below.
                </div>
              }
              extra={[
                <Button type="primary" key="console" onClick={onClickSuccessBtn}>
                  Go to the main page now
                </Button>,
              ]}
            />
          ) : (
            <FriendSettingForm />
          )}
        </FriendSettingWrapper>
      </AppLayout>
    </>
  );
};

export default ListSetting;
