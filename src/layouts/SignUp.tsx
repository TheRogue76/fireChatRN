import React, {useState, useRef} from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';

import {colors} from '../config/colors';

import SimpleInput from '../components/SimpleInput';
import SimpleButton from '../components/SimpleButton';
import PlatformView from '../components/PlatformView';

interface Props {
  handlePress: (email: string, password: string) => void;
  goToLoginPage: () => void;
}

const SignUp = (props: Props) => {
  const {handlePress, goToLoginPage} = props;
  const [email, setEmail] = useState<string>('');
  const [passWord, setPassWord] = useState<string>('');
  const [conf, setConf] = useState<string>('');
  const textRefs = useRef<TextInput[]>([]);
  const refSetup = (element: TextInput) => {
    if (element !== null) {
      textRefs.current.push(element);
    }
  };
  const switchTextInput = () => {
    let index = textRefs.current.findIndex(el => el.isFocused());
    textRefs.current[index + 1].focus();
  };
  const checkBeforeSubmitting = () => {
    if (conf === passWord) {
      handlePress(email, passWord);
    } else {
      console.log('password and confirmation do not match');
    }
  };
  return (
    <PlatformView style={styles.container}>
      <SimpleInput
        style={[styles.width, styles.marginBottom]}
        ref={refSetup}
        onChangeText={setEmail}
        value={email}
        placeholder="Enter your E-Mail"
        onSubmitEditing={switchTextInput}
      />
      <SimpleInput
        ref={refSetup}
        style={[styles.width, styles.marginBottom]}
        onChangeText={setPassWord}
        value={passWord}
        placeholder="Enter your Password"
        autoCompleteType="password"
        secureTextEntry={true}
        onSubmitEditing={switchTextInput}
      />
      <SimpleInput
        ref={refSetup}
        style={[styles.width, styles.marginBottom]}
        onChangeText={setConf}
        value={conf}
        placeholder="Confirm your Password"
        autoCompleteType="password"
        secureTextEntry={true}
      />
      <SimpleButton onPress={checkBeforeSubmitting} style={styles.width}>
        <Text>Sign Up</Text>
      </SimpleButton>
      <SimpleButton onPress={goToLoginPage} style={styles.width}>
        <Text>Login</Text>
      </SimpleButton>
    </PlatformView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.brandBlue,
  },
  width: {
    width: '80%',
  },
  marginBottom: {
    marginBottom: 20,
  },
});
export default SignUp;
