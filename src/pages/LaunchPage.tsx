import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Launch from '../layouts/Launch';
import {constants} from '@config';

const routes = constants.routes.loggedOut;

const LaunchPage = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      return navigation.navigate(routes.Login);
    }, 500);
  }, [navigation]);
  return <Launch />;
};
export default LaunchPage;
