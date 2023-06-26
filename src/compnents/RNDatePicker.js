import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const RNDatePicker = () => {
  return <View style={styles.mainContainer}>
  
  <Text style={styles.textLib}>react-native-date-time-picker</Text>
  <View style={styles.innerContainer}>
  </View>
  </View>;
};

export default RNDatePicker;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#90CAF9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLib:{
    color:'#fff',
    fontSize:27
  },
  innerContainer:{
    height:300
  }
});
