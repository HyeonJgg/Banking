// import 'react-native-gesture-handler';
import React,{Component, ReactElement, useState} from 'react';
import { StyleSheet,View,ScrollView,Text,Button, TextInput, Alert } from 'react-native';
import firestore from'@react-native-firebase/firestore';
import { money, getname } from './Remit';

const Color = {
  purple : "#dda0dd",
}
let minusmoney = 0;
function CompletePost({navigation}: {navigation: any}) {

  return (
    <ScrollView style={styles.container}>
      <View style = {styles.marginBottom}>
        <Text style={styles.textbold}>{getname}님에게 {money}원을 보냈습니다.</Text>
      </View>
      <View style = {styles.marginTop}>
        <Button
          color = {Color.purple}
          title = "확인"
          onPress={(e)=>{
            navigation.navigate('잔고 현황');
          }}
        />  
      </View>      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container :{
    flex:1,
    padding:10
  },
  centeralign:{
    alignItems:'center', // 가로 가운데 정렬
    justifyContent:'center', // 세로 가운데 정렬
  },
  text:{
    fontSize: 15,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:10
  },
  textbold:{
    fontSize: 20,
    fontWeight:'bold',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:10
  },
  marginBottom:{
    marginBottom:10,
  },
  marginTop:{
    marginTop:20
  },
  btn:{
    backgroundColor : "#dda0dd",
    borderRadius:20,
    width:100,
    height:50,
    alignItems:'center',
    justifyContent:'center',
  },
  btntext:{
    fontSize:15
  },
  size:{
    paddingLeft:280,
    width:380,
    height:35
  }
})

export default CompletePost
export {minusmoney}