import auth from '@react-native-firebase/auth';

import {LoginProps, SignUpProps} from '../interfaces';

export const createUser = (payload: SignUpProps) => {
  return auth().createUserWithEmailAndPassword(payload.email, payload.password);
};
export const loginUser = (payload: LoginProps) => {
  return auth().signInWithEmailAndPassword(payload.email, payload.password);
};
