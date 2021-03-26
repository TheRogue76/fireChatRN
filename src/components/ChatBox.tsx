import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import {InitialStateProps} from '../interfaces';

interface Props {
  sender: string;
  index: number;
  children: string;
  username: string;
}

const ChatBox = (props: Props) => {
  const {sender, index, children, username} = props;
  return (
    <>
      {sender === username ? (
        <View style={styles.containerSelf} key={index}>
          <Text style={styles.selfText} key={index}>
            {children}
          </Text>
          <View style={styles.rightArrow} />
          <View style={styles.rightArrowOverlap} />
        </View>
      ) : (
        <View style={styles.containerOther} key={index}>
          <Text style={styles.otherText} key={index}>
            {' '}
            {children}
          </Text>
          <View style={styles.leftArrow} />
          <View style={styles.leftArrowOverlap} />
        </View>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  containerSelf: {
    backgroundColor: '#0078fe',
    padding: 10,
    marginLeft: '45%',
    marginTop: 5,
    marginRight: '5%',
    maxWidth: '50%',
    alignSelf: 'flex-end',
    borderRadius: 20,
  },
  selfText: {fontSize: 16, color: '#fff'},
  containerOther: {
    backgroundColor: '#dedede',
    padding: 10,
    marginTop: 5,
    marginLeft: '5%',
    maxWidth: '50%',
    alignSelf: 'flex-start',
    borderRadius: 20,
  },
  otherText: {fontSize: 16, color: '#000', justifyContent: 'center'},
  rightArrow: {
    position: 'absolute',
    backgroundColor: '#0078fe',
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomLeftRadius: 25,
    right: -10,
  },

  rightArrowOverlap: {
    position: 'absolute',
    backgroundColor: '#eeeeee',
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomLeftRadius: 18,
    right: -20,
  },

  /*Arrow head for recevied messages*/
  leftArrow: {
    position: 'absolute',
    backgroundColor: '#dedede',
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomRightRadius: 25,
    left: -10,
  },

  leftArrowOverlap: {
    position: 'absolute',
    backgroundColor: '#eeeeee',
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomRightRadius: 18,
    left: -20,
  },
});
const mapStateToProps = (state: InitialStateProps) => {
  return {
    username: state.profile.username,
  };
};
export default connect(mapStateToProps, null)(ChatBox);
