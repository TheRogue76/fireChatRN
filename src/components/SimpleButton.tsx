import React, {memo} from 'react';
import {Pressable, PressableProps, View, StyleSheet} from 'react-native';

export const SimpleButton = memo((props: PressableProps) => {
  return (
    <View style={[styles.container]}>
      <Pressable {...props} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
