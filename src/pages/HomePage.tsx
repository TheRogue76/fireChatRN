import React from 'react';
import {View, StyleSheet} from 'react-native';

import {colors} from '../config/colors';

import ChatSection from '../components/ChatSection';
import ChatList from '../components/ChatList';
import PlatformView from '../components/PlatformView';

const HomePage = () => {
  return (
    <PlatformView style={styles.container}>
      <View style={styles.list}>
        <ChatList />
      </View>
      <View style={styles.section}>
        <ChatSection />
      </View>
    </PlatformView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screechingWhite,
  },
  list: {
    flex: 7,
  },
  section: {
    flex: 1,
  },
});
export default HomePage;
