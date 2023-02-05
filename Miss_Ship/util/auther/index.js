import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';

import { fbAuth } from '@pages/api/auth/fBase';

export const loginAuth = async (type, loginInfo) => {
  try {
    let credential;
    let FB_TOKEN;

    if (type) {
      const provider = new GoogleAuthProvider();
      credential = await signInWithPopup(fbAuth, provider);
      FB_TOKEN = await credential.user.getIdToken();
    } else {
      credential = await signInWithEmailAndPassword(fbAuth, loginInfo.email, loginInfo.password);
      FB_TOKEN = await credential.user.getIdToken();
    }

    sessionStorage.setItem('FB_TOKEN', FB_TOKEN);

    return {
      id: credential.user.uid,
      nickname: credential.user.displayName,
      email: credential.user.email,
      image: credential.user.photoURL,
    };
  } catch (error) {
    return error;
  }
};

export const signUpAuth = async (type, loginInfo) => {
  try {
    let credential;
    let FB_TOKEN;

    if (type) {
      const provider = new GoogleAuthProvider();
      credential = await signInWithPopup(fbAuth, provider);
      FB_TOKEN = await credential.user.getIdToken();
    } else {
      credential = await createUserWithEmailAndPassword(fbAuth, loginInfo.email, loginInfo.password);
      await updateProfile(fbAuth.currentUser, { displayName: loginInfo.nickname });
      FB_TOKEN = await credential.user.getIdToken();
    }

    sessionStorage.setItem('FB_TOKEN', FB_TOKEN);

    return {
      id: credential.user.uid,
      nickname: credential.user.displayName,
      email: credential.user.email,
      image: credential.user.photoURL,
    };
  } catch (error) {
    return error;
  }
};
