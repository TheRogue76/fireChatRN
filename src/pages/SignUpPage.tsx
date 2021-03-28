import React from 'react';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import SignUp from '../layouts/SignUp';

import {signup} from '../store/actions/signup/signup';
import {SignUpProps} from '../interfaces';

interface Props {
  signup: (payload: SignUpProps) => void;
}

const SignUpPage = (props: Props) => {
  const {signup} = props;
  const navigation = useNavigation();
  const handlePress = (email: string, password: string) => {
    signup({email: email, password: password});
  };
  const goToLoginPage = () => {
    navigation.navigate('Login');
  };
  return <SignUp handlePress={handlePress} goToLoginPage={goToLoginPage} />;
};
const mapDispatchToProps = {signup};
export default connect(null, mapDispatchToProps)(SignUpPage);
