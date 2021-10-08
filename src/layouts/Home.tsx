import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import {colors} from '@config';
import {ChatList, ChatSection, PlatformView} from '@components';
import {InitialStateProps} from '@src/interfaces';

const Home = () => {
  const email = useSelector((state: InitialStateProps) => state.profile.email);
  return (
    <PlatformView style={styles.container}>
      <View style={styles.list}>
        <ChatList email={email} />
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
export default Home;
