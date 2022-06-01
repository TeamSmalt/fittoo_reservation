import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB_UVsolXLdKrZtUMWgwTOkc4w-J3b9s8Q',
  authDomain: 'fittoo-df715.firebaseapp.com',
  projectId: 'fittoo-df715',
  storageBucket: 'fittoo-df715.appspot.com',
  messagingSenderId: '310671056266',
  appId: '1:310671056266:web:57e7e525cf25cb7a537c73',
  measurementId: 'G-TBLN6YMQHP',
};

initializeApp(firebaseConfig);

export const auth = getAuth();
