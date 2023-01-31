import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';

import AppLayout from '@components/AppLayout';
import LandingHeader from '@components/Landing/LandingHeader';
import LandingContent from '@components/Landing/LandingContent';
import LandingFooter from '@components/Landing/LandingFooter';
import { fbAuth } from 'javascripts/firebaseConfig';
import { USER_LOGIN } from '@reducers/user';

const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user);

  useEffect(() => {
    if (!me) {
      fbAuth.onAuthStateChanged(user => {
        if (user) {
          dispatch(
            USER_LOGIN({
              nickname: user.displayName,
              email: user.email,
              image: '',
            }),
          );
        }
      });
    }
  }, [me]);

  return (
    <>
      <Head>
        <title>Friendship Maintainer</title>
      </Head>

      <AppLayout>
        <LandingHeader />
        <LandingContent />
        <LandingFooter />
      </AppLayout>
    </>
  );
};

export default Home;
