import {
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  Image,
  View,
  Platform
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';

const RNModal = () => {
  const [open, setOpen] = useState(false);
  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight =
    Platform.OS === 'ios'
      ? Dimensions.get('window').height
      : require('react-native-extra-dimensions-android').get(
          'REAL_WINDOW_HEIGHT',
        );
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.textLib}>react-native-modal</Text>

        <TouchableOpacity style={styles.btnOpen} onPress={() => setOpen(!open)}>
          <Text style={styles.btnText}>OPEN</Text>
        </TouchableOpacity>
        <Modal
          isVisible={open}
          style={{width: deviceWidth, height: deviceHeight}}
          animationIn={'bounceInRight'}
          animationOut={'bounceInLeft'}
          // animationInTiming={3000}
          // animationOutTiming={3000}
          onBackdropPress={() => setOpen(!open)}
          backdropColor="green"
          backdropOpacity={0.8}
          customBackdrop={<TouchableOpacity onPress={()=>setOpen(!open)}> <Image  source={{uri:"https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"}}  style={{backgroundColor:'red',flex:1}}  /></TouchableOpacity>}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={2000}>
          <View style={styles.innerContainer2}>
            <Text>Hello!</Text>
            <TouchableOpacity
              style={styles.btnOpen}
              onPress={() => setOpen(!open)}>
              <Text style={styles.btnText}>CLOSE</Text>
            </TouchableOpacity>
          </View>
        </Modal>
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
  innerContainer2: {
    height: 200,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});
