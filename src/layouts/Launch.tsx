import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {colors} from '@config';

const Launch = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text>Fire Chat</Text>
      </View>
      <View style={styles.creator}>
        <Text>Made by Parsa Nasirimehr</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  creator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Launch;
