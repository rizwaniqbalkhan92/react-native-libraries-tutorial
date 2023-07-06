import {StyleSheet,TouchableOpacity,Image, Text, View} from 'react-native';
import React from 'react';
import IMG  from '../images/car.png'
const RNImgCrop = () => {
  return (
    <View style={styles.mainContainer}>
    <View style={styles.imgContainer}>
   <Image style={styles.img} resizeMode='contain'  source={IMG}  />
    </View>
     <View style={styles.innerContainer}>

     <View style={styles.buttons}>
     <TouchableOpacity style={styles.btnContainer}>
     <Text style={styles.textBtn}>Camera</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btnContainer}>
     <Text style={styles.textBtn}>Gallery</Text>
     </TouchableOpacity>
     
     </View>
     </View>
    </View>
  );
};

export default RNImgCrop;

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'yellow',
        justifyContent:'space-around',
        // alignItems:'center',
      

    },
    innerContainer:{
        height:'70%'
    },
    imgContainer:{
        height:'30%',
        // borderWidth:1,
        justifyContent:'center'
    },
    img:{
   width:'90%',
   height:'90%',
   alignSelf:'center',
   borderRadius:6
    },
    btnContainer:{
       width:90,
       height:90,
       borderRadius:5,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'navy'
    },
    buttons:{
        width:230,
        height:100,
        marginTop:100,
        alignSelf:'center',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    textBtn:{
        color:'#fff',
        fontSize:18
    }
});
