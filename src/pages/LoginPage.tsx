/* eslint-disable react-hooks/exhaustive-deps */

import React, {useEffect} from 'react';
import {
  // SafeAreaView,
  // ScrollView,
  // StatusBar,
  StyleSheet,
  Text,
  // useColorScheme,
  View,
} from 'react-native';
import {connect} from 'react-redux';

import {InitialStateProps, Profile} from '../interfaces';
import {login, PayLoad} from '../store/login/login';

interface Props {
  profile: Profile;
  login: (payload: PayLoad) => void;
}

const LoginPage = (props: Props) => {
  // const isDarkMode = useColorScheme() === 'dark';
  useEffect(() => {
    props.login({username: 'Parsa', token: 'SuperSecureToken'});
  }, []);
  console.log(props.profile);
  return (
    <View style={styles.container}>
      <Text>Hello {props.profile.username} !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
const mapStateToProps = (state: InitialStateProps) => {
  return {
    profile: state.profile,
  };
};
const mapDispatchToProps = {login};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
