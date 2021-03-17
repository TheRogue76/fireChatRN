import React, {forwardRef} from 'react';
import {TextInput, TextInputProps, StyleSheet, View} from 'react-native';
import {colors} from '../config/colors';

const SimpleInput = forwardRef(
  (props: TextInputProps, ref?: React.Ref<TextInput>) => {
    return (
      <View style={[styles.container, styles.height, props.style]}>
        <TextInput {...props} style={[styles.height]} ref={ref} />
      </View>
    );
  },
);
const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    paddingHorizontal: 25,
    backgroundColor: colors.white,
  },
  height: {
    height: 50,
  },
});
export default SimpleInput;
