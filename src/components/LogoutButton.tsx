import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import SimpleButton from './SimpleButton';
import {colors} from '../config/colors';
import {logout} from '../store/actions/logout/logout';

interface Props {
  logout: () => void;
}

const LogoutButton = (props: Props) => {
  const {logout} = props;
  const handlePress = () => {
    logout();
  };
  return (
    <SimpleButton onPress={handlePress} style={styles.container}>
      <Text>Exit</Text>
    </SimpleButton>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.brandLightBlue,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const mapDispatchToProps = {logout};
export default connect(null, mapDispatchToProps)(LogoutButton);
