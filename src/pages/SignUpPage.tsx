import React from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import SignUp from '../layouts/SignUp';

import {signup} from '@store/actions';

const SignUpPage = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handlePress = (email: string, password: string) => {
    dispatch(signup({email: email, password: password}));
  };

  const goToLoginPage = () => {
    navigation.navigate('Login');
  };
  return <SignUp handlePress={handlePress} goToLoginPage={goToLoginPage} />;
};
export default SignUpPage;
