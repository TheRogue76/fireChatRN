import React, {useState, useRef} from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';

import {colors} from '../config/colors';

import SimpleInput from '../components/SimpleInput';
import SimpleButton from '../components/SimpleButton';
import PlatformView from '../components/PlatformView';

interface Props {
  handlePress: (userName: string, passWord: string) => void;
  goToSignUpPage: () => void;
}

const Login = (props: Props) => {
  const {handlePress, goToSignUpPage} = props;
  const [userName, setUserName] = useState<string>('');
  const [passWord, setPassWord] = useState<string>('');
  const passwordRef = useRef<TextInput>(null);
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
      <SimpleButton
        onPress={() => {
          handlePress(userName, passWord);
        }}
        style={styles.width}>
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
export default Login;
