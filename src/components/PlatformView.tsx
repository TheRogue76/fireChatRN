import React, {memo} from 'react';
import {
  Platform,
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  View,
} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';

interface Props extends KeyboardAvoidingViewProps {
  children: JSX.Element | JSX.Element[];
}

export const PlatformView = memo((props: Props) => {
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
});
