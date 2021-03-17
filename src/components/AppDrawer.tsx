import React from 'react';
import {
  DrawerContentScrollView,
  // DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

import {AppDrawerItem} from './AppDrawerItem';
import LogoutButton from './LogoutButton';

export const AppDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <AppDrawerItem route="Home" name="Home Page" {...props} />
      <LogoutButton />
    </DrawerContentScrollView>
  );
};
