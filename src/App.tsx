import React from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import LoginPage from './pages/LoginPage';
import LaunchPage from './pages/LaunchPage';

import {InitialStateProps} from './interfaces';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

interface Props {
  isLoggedIn: boolean;
}

const App = (props: Props) => {
  const {isLoggedIn} = props;
  return (
    <NavigationContainer>
      {!isLoggedIn && (
        <Stack.Navigator headerMode="none" initialRouteName="Launch">
          <Stack.Screen name="Launch" component={LaunchPage} />
          <Stack.Screen name="Login" component={LoginPage} />
        </Stack.Navigator>
      )}
      {isLoggedIn && (
        <Drawer.Navigator initialRouteName="">
          <Drawer.Screen name={} component={} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
};
const mapStateToProps = (state: InitialStateProps) => {
  return {
    isLoggedIn: state.profile.isLoggedIn,
  };
};
export default connect(mapStateToProps, null)(App);
