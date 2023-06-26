import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const RNModal = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.textLib}>react-native-modal</Text>

        <TouchableOpacity style={styles.btnOpen}>
          <Text style={styles.btnText}>OPEN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RNModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  btnOpen: {
    width: 100,
    height: 40,
    borderRadius: 6,
    backgroundColor: 'navy',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
  },
  textLib: {
    fontSize: 30,
  },
  innerContainer: {
    height: 200,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

});
