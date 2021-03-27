import React from 'react';
import {Text, StyleSheet, Pressable, View} from 'react-native';

import {colors} from '../config/colors';
import ChatInput from './ChatInput';

const ChatSection = () => {
  const messageSent = () => {
    console.log('message sent');
  };
  return (
    <View style={styles.container}>
      <ChatInput style={styles.input} multiline={true} />
      <Pressable onPress={messageSent} style={styles.messageButton}>
        <Text>Send</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    height: '100%',
  },
  input: {
    width: '85%',
    marginTop: 15,
    paddingLeft: 15,
  },
  messageButton: {
    marginTop: 15,
    width: '15%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ChatSection;
