import { createAsyncThunk } from '@reduxjs/toolkit';
import { Cookies } from 'react-cookie';
import Router from 'next/router';

import { fbAuth } from '@pages/api/auth/fBase';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';

const cookie = new Cookies();

const setToken = token => {
  cookie.set('FB_TOKEN', token);
};

export const getToken = () => {
  fbAuth.onIdTokenChanged(async user => {
    if (user) {
      const newToken = await user.getIdToken();
      setToken(newToken);
    }
  });

  const token = cookie.get('FB_TOKEN') ?? '';
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

    Router.push('/friends');

    return {
      id: credential.user.uid,
      nickname: credential.user.displayName,
      email: credential.user.email,
      image: credential.user.photoURL,
    };
  } catch (error) {
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

    Router.push('/listSetting');

    return {
      id: credential.user.uid,
      nickname: credential.user.displayName,
      email: credential.user.email,
      image: credential.user.photoURL,
    };
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const logout = createAsyncThunk('user/logout', async () => {
  try {
    await fbAuth.signOut();
    cookie.remove('FB_TOKEN');
  } catch (error) {
    console.log(error);
  }
});
