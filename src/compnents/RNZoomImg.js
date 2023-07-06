import {StyleSheet, ActivityIndicator, Text, View} from 'react-native';
import React from 'react';

import Image from 'react-native-image-progress';
import Progress from 'react-native-progress';

const RNZoomImg = () => {
  return (
    <Image
      source={{
        uri: "http://loremflickr.com/640/480/butterfly",
      }}
      indicator={Progress?.Bar}
      indicatorProps={{
        size: 80,
        borderWidth: 10,
        color: 'rgba(150, 150, 150, 1)',
        unfilledColor: 'rgba(200, 200, 200, 0.2)',
      }}
      threshold={10}
      style={{
        width: 320,
        height: 240,
      }}
    />
  );
};

export default RNZoomImg;

const styles = StyleSheet.create({});
