import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {login} from '@store/actions';

import Login from '../layouts/Login';

const LoginPage = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handlePress = (userName: string, passWord: string) => {
    dispatch(login({email: userName, password: passWord}));
  };

  const goToSignUpPage = () => {
    navigation.navigate('SignUp');
  };
  return <Login handlePress={handlePress} goToSignUpPage={goToSignUpPage} />;
};
export default LoginPage;
