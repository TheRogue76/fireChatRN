import React from 'react';
import {Pressable, PressableProps, View, StyleSheet} from 'react-native';

const SimpleButton = (props: PressableProps) => {
  return (
    <View style={[styles.container]}>
      <Pressable {...props} hitSlop={40} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 40,
  },
});
export default SimpleButton;
