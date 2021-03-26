import React from 'react';
import {StyleSheet, View} from 'react-native';

import ChatList from '../components/ChatList';

import {colors} from '../config/colors';
import ChatSection from '../components/ChatSection';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <ChatList />
      <ChatSection />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screechingWhite,
  },
});
export default HomePage;
