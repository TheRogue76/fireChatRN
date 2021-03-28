import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';

import {login, PayLoad} from '../store/actions/login/login';

import Login from '../layouts/Login';

interface Props {
  login: (payload: PayLoad) => void;
}

const LoginPage = (props: Props) => {
  const navigation = useNavigation();
  const {login} = props;
  const handlePress = (userName: string, passWord: string) => {
    login({email: userName, password: passWord});
  };
  const goToSignUpPage = () => {
    navigation.navigate('SignUp');
  };
  return <Login handlePress={handlePress} goToSignUpPage={goToSignUpPage} />;
};
const mapDispatchToProps = {login};
export default connect(null, mapDispatchToProps)(LoginPage);
