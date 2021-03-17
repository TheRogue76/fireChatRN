/* eslint-disable react-hooks/exhaustive-deps */

import React, {useEffect} from 'react';
import {
  // SafeAreaView,
  // ScrollView,
  // StatusBar,
  StyleSheet,
  Text,
  Pressable,
  // useColorScheme,
  View,
} from 'react-native';
import {connect} from 'react-redux';

import {Profile} from '../interfaces';
import {login, PayLoad} from '../store/login/login';

interface Props {
  profile: Profile;
  login: (payload: PayLoad) => void;
}

const LoginPage = (props: Props) => {
  // const isDarkMode = useColorScheme() === 'dark';
  const {login} = props;
  const handlePress = () => {
    login({username: 'Parsa', token: 'MyToken'});
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress}>
        <Text>Login</Text>
      </Pressable>
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
const mapDispatchToProps = {login};
export default connect(null, mapDispatchToProps)(LoginPage);
