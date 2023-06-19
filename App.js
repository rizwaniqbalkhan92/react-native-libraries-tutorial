import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FlashMsg from './src/compnents/FlashMsg';
import ReactNativeWebView from './src/compnents/ReactNativeWebView';

const App = () => {
  return (
    <View>
      <ReactNativeWebView />
    </View>
  );
};

export default App;

//  <FlashMsg/>
const styles = StyleSheet.create({});
