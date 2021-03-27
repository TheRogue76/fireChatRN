import React, {useState, useRef} from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {colors} from '../config/colors';

import SimpleInput from '../components/SimpleInput';
import SimpleButton from '../components/SimpleButton';
import PlatformView from '../components/PlatformView';

const SignUpPage = () => {
  // States
  const [userName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [passWord, setPassWord] = useState<string>('');
  const [conf, setConf] = useState<string>('');
  // Refrences
  const textRefs = useRef<TextInput[]>([]);
  const refSetup = (element: TextInput) => {
    if (element !== null) {
      textRefs.current.push(element);
    }
  };
  // Navigation
  const navigation = useNavigation();
  const handlePress = () => {
    console.log('successfull signup');
  };
  const goToLoginPage = () => {
    navigation.navigate('Login');
  };
  const switchTextInput = () => {
    let index = textRefs.current.findIndex(el => el.isFocused());
    textRefs.current[index + 1].focus();
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
        onChangeText={setUserName}
        value={userName}
        placeholder="Enter your Username"
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
      <SimpleButton onPress={handlePress} style={styles.width}>
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
export default connect(null, null)(SignUpPage);
