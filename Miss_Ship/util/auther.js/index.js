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
    let idToken;

    if (type) {
      const provider = new GoogleAuthProvider();
      credential = await signInWithPopup(fbAuth, provider);
      idToken = await credential.user.getIdToken();
    } else {
      credential = await signInWithEmailAndPassword(fbAuth, loginInfo.email, loginInfo.password);
      idToken = await credential.user.getIdToken();
    }
    return {
      id: credential.user.uid,
      nickname: credential.user.displayName,
      email: credential.user.email,
      image: credential.user.photoURL,
      token: idToken,
    };
  } catch (error) {
    return error;
  }
};

export const signUpAuth = async (type, loginInfo) => {
  try {
    let credential;
    let idToken;

    if (type) {
      const provider = new GoogleAuthProvider();
      credential = await signInWithPopup(fbAuth, provider);
      idToken = await credential.user.getIdToken();
    } else {
      credential = await createUserWithEmailAndPassword(fbAuth, loginInfo.email, loginInfo.password);
      await updateProfile(fbAuth.currentUser, { displayName: loginInfo.nickname });
      idToken = await credential.user.getIdToken();
    }
    return {
      id: credential.user.uid,
      nickname: credential.user.displayName,
      email: credential.user.email,
      image: credential.user.photoURL,
      token: idToken,
    };
  } catch (error) {
    return error;
  }
};
