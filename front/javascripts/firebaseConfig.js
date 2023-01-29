import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA6k3epIk-SNJ-KIpA94sAlWFe3RcR6HB0',
  authDomain: 'friendship-app-376010.firebaseapp.com',
  projectId: 'friendship-app-376010',
  storageBucket: 'friendship-app-376010.appspot.com',
  messagingSenderId: '625722388370',
  appId: '1:625722388370:web:d6c7260fb937cd1fd3db4b',
  measurementId: 'G-J7MD6S0GNG',
};

export const fbApp = initializeApp(firebaseConfig);
export const fbAuth = getAuth(fbApp);
