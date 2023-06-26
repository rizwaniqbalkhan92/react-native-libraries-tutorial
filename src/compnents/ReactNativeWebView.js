import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';

const ReactNativeWebView = () => {
  return (
    <WebView source={{uri: 'https://infinite.red'}} style={{marginTop: 0}} />
  );
};

export default ReactNativeWebView;

const styles = StyleSheet.create({});
