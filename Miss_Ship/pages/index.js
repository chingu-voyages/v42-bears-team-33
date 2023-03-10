import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';

import AppLayout from '@components/AppLayout';
import LandingHeader from '@components/Landing/LandingHeader';
import LandingContent from '@components/Landing/LandingContent';
import LandingFooter from '@components/Landing/LandingFooter';
import { LOAD_USER } from '@reducers/user';
import { fbAuth } from './api/auth/fBase';

const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user);

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
