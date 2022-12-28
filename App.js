import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable, TextInput, StatusBar } from 'react-native';
import { Conversation as ConversationIcon, Translate } from './assets';
// import { Conversation, Translation } from './src/components';
import { Conversation } from './src/components/Conversation';
import { Translation } from './src/components/Translation';

const Content = ({ selectedIndex }) => {
  switch (selectedIndex) {
    case 0:
      return <Conversation />
    case 1:
      return <Translation />
    default: return <></>;
  }
}

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const changeSelection = (selection) => () => setSelectedIndex(selection);
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Content {...{ selectedIndex }} />
      <View style={styles.tabBar}>
        <Pressable onPress={changeSelection(0)}>
          <Image style={styles.tabIcon} source={ConversationIcon} />
        </Pressable>
        <Pressable onPress={changeSelection(1)}>
          <Image style={styles.tabIcon} source={Translate} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 30,
    paddingTop: 20,
    backgroundColor: '#82AAE3',
    width: '100%',
    shadowColor: "#000",
    shadowOffset: {
      height: -6,
      width: 0
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
});

export default App;