import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ImageProgress from 'react-native-image-progress';
import Progress from 'react-native-progress';

const ImgProgress = () => {
  return (
    <View style={styles.mainContainer}>
      <ImageProgress
        source={{uri: 'http://loremflickr.com/640/480/elephant'}}
        // indicator={Progress.Bar}
        indicatorProps={{
          size: 80,
          borderWidth: 0,
          color: 'rgba(140, 110, 150, 1)',
          unfilledColor: 'rgba(100, 200, 160, 0.2)',
        }}
        style={{
          width: 400,
          height: 340,
        }}
      />
    </View>
  );
};

export default ImgProgress;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
});
