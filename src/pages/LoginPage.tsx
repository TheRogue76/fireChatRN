import React, {useState, useRef} from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {Profile} from '../interfaces';
import {login, PayLoad} from '../store/actions/login/login';
import {colors} from '../config/colors';

import SimpleInput from '../components/SimpleInput';
import SimpleButton from '../components/SimpleButton';
import PlatformView from '../components/PlatformView';

interface Props {
  profile: Profile;
  login: (payload: PayLoad) => void;
}

const LoginPage = (props: Props) => {
  const [userName, setUserName] = useState<string>('');
  const [passWord, setPassWord] = useState<string>('');
  const passwordRef = useRef<TextInput>(null);
  const navigation = useNavigation();
  const {login} = props;
  const handlePress = () => {
    login({username: userName, password: passWord});
  };
  const goToSignUpPage = () => {
    navigation.navigate('SignUp');
  };
  const switchTextInput = () => {
    if (passwordRef.current) {
      passwordRef.current.focus();
    }
  };
  return (
    <PlatformView style={styles.container}>
      <SimpleInput
        style={[styles.width, styles.marginBottom]}
        onChangeText={setUserName}
        value={userName}
        onSubmitEditing={switchTextInput}
        placeholder="Enter Username"
      />
      <SimpleInput
        ref={passwordRef}
        style={[styles.width, styles.marginBottom]}
        onChangeText={setPassWord}
        value={passWord}
        autoCompleteType="password"
        placeholder="Enter Password"
        secureTextEntry={true}
      />
      <SimpleButton onPress={handlePress} style={styles.width}>
        <Text>Login</Text>
      </SimpleButton>
      <SimpleButton onPress={goToSignUpPage} style={styles.width}>
        <Text>Sign Up</Text>
      </SimpleButton>
    </PlatformView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.brandLightBlue,
  },
  width: {
    width: '80%',
  },
  marginBottom: {
    marginBottom: 20,
  },
});
const mapDispatchToProps = {login};
export default connect(null, mapDispatchToProps)(LoginPage);
