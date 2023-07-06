import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';
import React from 'react';
import IMG from '../images/mountains.jpg';
const RNImgPicker = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} resizeMode="contain" source={IMG} />
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.btnContainer}>
            <Image
              source={require('../images/bg2.png')}
              style={styles.iconImg}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnContainer}>
            <Image
              source={require('../images/bg3.png')}
              style={styles.iconImg}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RNImgPicker;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-around',
  },
  iconImg: {
    width: 80,
    height: 80,
  },
  innerContainer: {
    height: '70%',
  },
  imgContainer: {
    height: '30%',
    // borderWidth:1,
    justifyContent: 'center',
  },
  img: {
    width: '90%',
    height: '90%',
    alignSelf: 'center',
    borderRadius: 6,
  },
  btnContainer: {
    width: 90,
    height: 90,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    width: 230,
    height: 100,
    marginTop: 100,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

});
