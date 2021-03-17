import React from 'react';
import {Platform} from 'react-native';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import LaunchPage from './pages/LaunchPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';

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
        <Stack.Navigator
          headerMode="none"
          initialRouteName={Platform.OS !== 'ios' ? 'Launch' : 'Login'}>
          {Platform.OS !== 'ios' && (
            <Stack.Screen name="Launch" component={LaunchPage} />
          )}
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="SignUp" component={SignUpPage} />
        </Stack.Navigator>
      )}
      {isLoggedIn && (
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomePage} />
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
