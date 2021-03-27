import React from 'react';
import {Platform, Pressable, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LaunchPage from './pages/LaunchPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';

import {InitialStateProps} from './interfaces';
import {logout} from './store/actions/logout/logout';

const Stack = createStackNavigator();

interface Props {
  isLoggedIn: boolean;
  logout: () => void;
}

const App = (props: Props) => {
  const {isLoggedIn, logout} = props;
  const handlePress = () => {
    logout();
  };
  return (
    <NavigationContainer>
      {!isLoggedIn && (
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={Platform.OS !== 'ios' ? 'Launch' : 'Login'}>
          {Platform.OS !== 'ios' && (
            <Stack.Screen name="Launch" component={LaunchPage} />
          )}
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="SignUp" component={SignUpPage} />
        </Stack.Navigator>
      )}
      {isLoggedIn && (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{
              title: 'Fire Chat',
              headerRight: () => (
                <Pressable onPress={handlePress} style={styles.logoutButton}>
                  <Text>Logout</Text>
                </Pressable>
              ),
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  logoutButton: {
    marginRight: 20,
  },
});
const mapStateToProps = (state: InitialStateProps) => {
  return {
    isLoggedIn: state.profile.isLoggedIn,
  };
};
const mapDispatchToProps = {logout};
export default connect(mapStateToProps, mapDispatchToProps)(App);
