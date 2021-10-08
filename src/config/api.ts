import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

import {LoginProps} from '@src/interfaces';

const createUser = (payload: {email: string; password: string}) => {
  return auth()
    .createUserWithEmailAndPassword(payload.email, payload.password)
    .then((response: FirebaseAuthTypes.UserCredential) => ({response}))
    .catch((error: any) => ({error}));
};

const loginUser = (payload: LoginProps) => {
  return auth()
    .signInWithEmailAndPassword(payload.email, payload.password)
    .then((response: FirebaseAuthTypes.UserCredential) => ({response}))
    .catch((error: any) => ({error}));
};

export const apis = {
  createUser,
  loginUser,
};
