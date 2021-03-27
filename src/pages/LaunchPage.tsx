import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Launch from '../layouts/Launch';

const LaunchPage = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 500);
  }, [navigation]);
  return <Launch />;
};
export default LaunchPage;
