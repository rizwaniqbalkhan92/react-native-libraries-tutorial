import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import FlashMessage, {showMessage} from 'react-native-flash-message';

const FlashMsg = () => {
  function showMsg() {
    showMessage({
      message: 'Simple message Simple message Simple message',
      type: 'danger',
    });
  }

  function showMsgTopLeft() {
    showMessage({
      message: 'Hello World',
      description: 'This is our second message',
      type: 'success',
      position: 'top',
    });
  }
  function showMsgDesc() {
    showMessage({
      message: 'Hello World',
      description: 'This is our second message',
      type: 'success',
    });
  }
  function showMsgBg() {
    showMessage({
      message: 'My message title',
      description: 'My message description',
      type: 'default',
      backgroundColor: 'blue', // background color
      color: '#fff',

      // text color
    });
  }
  function showMsgIcon() {
    showMessage({
      message: 'Hello World',
      description: 'This is our second message',
      type: 'success',
      icon: props => (
        <Image
          {...props}
          source={{
            uri: 'data:image/jpeg;base64,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',
          }}
        />
      ),
    });
  }

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={showMsg} style={styles.btnMsg}>
        <Text style={styles.btnText}> Show Msg</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={showMsgTopLeft} style={styles.btnMsg2}>
        <Text style={styles.btnText}> Top </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={showMsgDesc} style={styles.btnMsg3}>
        <Text style={styles.btnText}> message with description</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={showMsgBg} style={styles.btnMsg4}>
        <Text style={styles.btnText}> background color</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={showMsgIcon} style={styles.btnMsg5}>
        <Text style={styles.btnText}>show msg + Icon img</Text>
      </TouchableOpacity>
      <FlashMessage style={{width: 300, height: 100}} position={'center'} />
    </View>
  );
};

export default FlashMsg;

const styles = StyleSheet.create({
  mainContainer: {
    alignSelf: 'center',
    marginTop: 100,
    height: 400,
    justifyContent: 'space-around',
  },
  btnMsg: {
    width: 200,
    height: 40,
    borderRadius: 5,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnMsg2: {
    width: 200,
    height: 40,
    borderRadius: 5,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnMsg3: {
    width: 200,
    height: 40,
    borderRadius: 5,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnMsg4: {
    width: 200,
    height: 40,
    borderRadius: 5,
    backgroundColor: 'navy',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnMsg5: {
    width: 200,
    height: 40,
    borderRadius: 5,
    backgroundColor: 'maroon',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
  },
});
