import React from 'react';
import {
  Platform,
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  View,
} from 'react-native';
import {useHeaderHeight} from '@react-navigation/stack';

interface Props extends KeyboardAvoidingViewProps {
  children: any;
}

const PlatformView = (props: Props) => {
  const headerHeight = useHeaderHeight();
  const {children, style} = props;
  return (
    <>
      {Platform.OS === 'ios' ? (
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={headerHeight}
          style={style}>
          {children}
        </KeyboardAvoidingView>
      ) : (
        <View style={style}>{children}</View>
      )}
    </>
  );
};
export default PlatformView;
