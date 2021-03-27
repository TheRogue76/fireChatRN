import React from 'react';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import SignUp from '../layouts/SignUp';

const SignUpPage = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    console.log('successful signup');
  };
  const goToLoginPage = () => {
    navigation.navigate('Login');
  };
  return <SignUp handlePress={handlePress} goToLoginPage={goToLoginPage} />;
};
export default connect(null, null)(SignUpPage);
