import React from 'react';
import {StyleSheet, View} from 'react-native';

import ChatList from '../components/ChatList';

import {colors} from '../config/colors';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <ChatList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: colors.white,
  },
});
export default HomePage;
