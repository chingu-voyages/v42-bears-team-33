import { createAsyncThunk } from '@reduxjs/toolkit';
import { message } from 'antd';
import Router from 'next/router';

import { fbAuth } from '@pages/api/auth/fBase';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';

const setToken = token => {
  localStorage.setItem('FB_TOKEN', token);
};

export const getToken = () => {
  fbAuth.onIdTokenChanged(async user => {
    if (user) {
      const newToken = await user.getIdToken();
      setToken(newToken);
    }
  });

  const token = localStorage.getItem('FB_TOKEN') ?? '';
  return token;
};

export const login = createAsyncThunk('user/login', async (data, { rejectWithValue }) => {
  try {
    let credential;

    if (data.type === 'google') {
      localStorage.clear();
      const provider = new GoogleAuthProvider();
      credential = await signInWithPopup(fbAuth, provider);

      const token = await credential.user.getIdToken();
      setToken(token);
    } else {
      credential = await signInWithEmailAndPassword(fbAuth, data.loginInfo.email, data.loginInfo.password);

      const token = await credential.user.getIdToken();
      setToken(token);
    }

    if (data.type !== 'google' && data?.loginInfo.remember) {
      localStorage.setItem(
        'USER_INFO',
        JSON.stringify({
          email: data.loginInfo.email,
          password: data.loginInfo.password,
          remember: data.loginInfo.remember,
        }),
      );
    }

    message.success('Login was successful.');
    Router.push('/friends');

    return {
      id: credential.user.uid,
      nickname: credential.user.displayName,
      email: credential.user.email,
      image: credential.user.photoURL,
    };
  } catch (error) {
    message.error('Your login failed.');
    return rejectWithValue(error.response.data);
  }
});

export const signup = createAsyncThunk('user/signup', async (data, { rejectWithValue }) => {
  try {
    let credential;

    if (data.type === 'google') {
      localStorage.clear();
      const provider = new GoogleAuthProvider();
      credential = await signInWithPopup(fbAuth, provider);

      const token = await credential.user.getIdToken();
      setToken(token);
    } else {
      credential = await createUserWithEmailAndPassword(fbAuth, data.signupInfo.email, data.signupInfo.password);
      await updateProfile(fbAuth.currentUser, { displayName: data.signupInfo.nickname });
      await signInWithEmailAndPassword(fbAuth, data.signupInfo.email, data.signupInfo.password);

      const token = await credential.user.getIdToken();
      setToken(token);
    }

    message.success('You have successfully registered as a member.');
    Router.push('/listSetting');

    return {
      id: credential.user.uid,
      nickname: credential.user.displayName,
      email: credential.user.email,
      image: credential.user.photoURL,
    };
  } catch (error) {
    message.error('Membership sign-up failed.');
    return rejectWithValue(error.response.data);
  }
});

export const logout = createAsyncThunk('user/logout', async () => {
  try {
    await fbAuth.signOut();
    localStorage.removeItem('FB_TOKEN');
    message.success('You have been logged out.');
  } catch (error) {
    console.log(error);
    message.error('Logging out failed.');
  }
});
