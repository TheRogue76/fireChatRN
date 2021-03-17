import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {DrawerContentComponentProps} from '@react-navigation/drawer';

import SimpleButton from './SimpleButton';
import {colors} from '../config/colors';

interface Props extends DrawerContentComponentProps {
  route: string;
  name: string;
}

export const AppDrawerItem = (props: Props) => {
  const {route, navigation, name} = props;
  const handlePress = () => {
    navigation.navigate(route);
  };
  return (
    <SimpleButton onPress={handlePress} style={styles.container}>
      <Text>{name}</Text>
    </SimpleButton>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.brandLightBlue,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
