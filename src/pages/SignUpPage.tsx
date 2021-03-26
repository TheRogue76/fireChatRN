import React, {useState, useRef} from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import SimpleInput from '../components/SimpleInput';
import SimpleButton from '../components/SimpleButton';
import {Profile} from '../interfaces';
import {login, PayLoad} from '../store/actions/login/login';
import {colors} from '../config/colors';

interface Props {
  profile: Profile;
  login: (payload: PayLoad) => void;
}

const SignUpPage = (props: Props) => {
  const [userName, setUserName] = useState<string>('');
  const [passWord, setPassWord] = useState<string>('');
  const passwordRef = useRef<TextInput>(null);
  const navigation = useNavigation();
  const {login} = props;
  const handlePress = () => {
    login({username: userName, password: passWord});
  };
  const goToLoginPage = () => {
    navigation.navigate('Login');
  };
  const switchTextInput = () => {
    if (passwordRef.current) {
      passwordRef.current.focus();
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <SimpleInput
        style={[styles.width, styles.marginBottom]}
        onChangeText={setUserName}
        value={userName}
        onSubmitEditing={switchTextInput}
      />
      <SimpleInput
        ref={passwordRef}
        style={[styles.width, styles.marginBottom]}
        onChangeText={setPassWord}
        value={passWord}
        autoCompleteType="password"
        secureTextEntry={true}
      />
      <SimpleButton onPress={handlePress} style={styles.width}>
        <Text>Sign Up</Text>
      </SimpleButton>
      <SimpleButton onPress={goToLoginPage} style={styles.width}>
        <Text>Login</Text>
      </SimpleButton>
    </KeyboardAvoidingView>
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
const mapDispatchToProps = {login};
export default connect(null, mapDispatchToProps)(SignUpPage);
