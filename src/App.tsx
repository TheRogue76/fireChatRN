import React, {useEffect} from 'react';
import {Platform, Pressable, Text, StyleSheet, I18nManager} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LaunchPage from './pages/LaunchPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';

import {InitialStateProps} from './interfaces';
import {logout} from '@store/actions';
import {loadState} from '@store/storeStorage';

if (!I18nManager.isRTL) {
  I18nManager.allowRTL(true);
  I18nManager.forceRTL(true);
}

const Stack = createStackNavigator();

const App = () => {
  const isLoggedIn = useSelector(
    (state: InitialStateProps) => state.profile.isLoggedIn,
  );

  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(logout());
  };
  useEffect(() => {
    loadState();
  }, []);
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
export default App;
