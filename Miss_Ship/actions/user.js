import { createAsyncThunk } from '@reduxjs/toolkit';
import Router from 'next/router';

import { fbAuth } from '@pages/api/auth/fBase';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';

export const login = createAsyncThunk('user/login', async (data, { rejectWithValue }) => {
  try {
    let credential;
    let FB_TOKEN;

    if (data.type === 'google') {
      const provider = new GoogleAuthProvider();
      credential = await signInWithPopup(fbAuth, provider);
      FB_TOKEN = await credential.user.getIdToken();
    } else {
      credential = await signInWithEmailAndPassword(fbAuth, data.loginInfo.email, data.loginInfo.password);
      FB_TOKEN = await credential.user.getIdToken();
    }

    if (data.loginInfo.remember) {
      localStorage.setItem(
        'USER_INFO',
        JSON.stringify({
          email: data.loginInfo.email,
          password: data.loginInfo.password,
          remember: data.loginInfo.remember,
        }),
      );
    }
    localStorage.setItem('FB_TOKEN', FB_TOKEN);

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
    let FB_TOKEN;

    if (data.type === 'google') {
      const provider = new GoogleAuthProvider();
      credential = await signInWithPopup(fbAuth, provider);
      FB_TOKEN = await credential.user.getIdToken();
    } else {
      credential = await createUserWithEmailAndPassword(fbAuth, data.signupInfo.email, data.signupInfo.password);
      await updateProfile(fbAuth.currentUser, { displayName: data.signupInfo.nickname });
      await signInWithEmailAndPassword(fbAuth, data.signupInfo.email, data.signupInfo.password);
      FB_TOKEN = await credential.user.getIdToken();
    }

    localStorage.setItem('FB_TOKEN', FB_TOKEN);

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
  await fbAuth.signOut();
  localStorage.removeItem('FB_TOKEN');

  return true;
});
