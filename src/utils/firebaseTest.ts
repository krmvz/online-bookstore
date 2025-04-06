import { auth } from '../config/firebase';

export const testFirebaseConnection = () => {
  if (auth) {
    console.log('Firebase Auth is initialized');
    return true;
  } else {
    console.error('Firebase Auth is not initialized');
    return false;
  }
};