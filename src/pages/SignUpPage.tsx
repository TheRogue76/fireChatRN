/* eslint-disable react-hooks/exhaustive-deps */

import React from 'react';
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
import {login, PayLoad} from '../store/actions/login/login';
import { colors } from "../config/colors";

interface Props {
  profile: Profile;
  login: (payload: PayLoad) => void;
}

const SignUpPage = (props: Props) => {
  // const isDarkMode = useColorScheme() === 'dark';
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
    backgroundColor: colors.white,
  },
});
const mapStateToProps = (state: InitialStateProps) => {
  return {
    profile: state.profile,
  };
};
const mapDispatchToProps = {login};
export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
