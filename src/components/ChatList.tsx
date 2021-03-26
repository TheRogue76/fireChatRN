import React, {useRef} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ChatBox from './ChatBox';
import {colors} from '../config/colors';

export interface Item {
  text: string;
  sender: string;
}

const ChatList = () => {
  const FlatListRef = useRef<FlatList>(null);
  const state: Item[] = [
    {sender: 'Parsa', text: 'Hello'},
    {
      sender: 'Imaginary',
      text: 'Lol you fucking loserasdasdasdasdasdasdasdasdasdas',
    },
    {sender: 'Parsa', text: 'rude'},
    {sender: 'third dude', text: 'it is true'},
  ];
  return (
    <FlatList
      style={styles.container}
      data={state}
      ref={FlatListRef}
      renderItem={({item, index}: {item: Item; index: number}) => (
        <ChatBox sender={item.sender} index={index}>
          {item.text}
        </ChatBox>
      )}
      keyExtractor={(_item, index) => index.toString(10)}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.screechingWhite,
    paddingTop: 10,
  },
});
export default ChatList;
