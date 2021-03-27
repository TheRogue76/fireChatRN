import React, {forwardRef} from 'react';
import {TextInput, TextInputProps, StyleSheet, View} from 'react-native';
import {colors} from '../config/colors';

const ChatInput = forwardRef(
  (props: TextInputProps, ref?: React.Ref<TextInput>) => {
    return (
      <View style={[styles.container, styles.height, props.style]}>
        <TextInput {...props} style={[styles.height, styles.input]} ref={ref} />
      </View>
    );
  },
);
const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: colors.white,
  },
  height: {
    minHeight: 40,
    maxHeight: 60,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.kinglyCloud,
    borderRadius: 5,
  },
});
export default ChatInput;
