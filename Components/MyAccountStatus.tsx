// import 'react-native-gesture-handler';
import React,{Component, ReactElement} from 'react';
import { StyleSheet,View,Text,Button, TextInput } from 'react-native';
import {balance} from './CheckAccount';
const Color = {
  purple : "#dda0dd",
}

function CheckAccount({navigation}: {navigation: any}) {
  //const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style = {styles.marginBottom}>
        <Text style={styles.textbold}>잔고 현황</Text>
        <Text style={styles.text}>{balance}</Text>
      </View>
      <View style = {styles.marginTop}>
        <Button
          color = {Color.purple}
          title = "송금"
          onPress={()=>
            navigation.navigate('송금')}
        />
      </View>  
      <View style = {styles.marginTop}>
        <Button
          color = {Color.purple}
          title = "거래내역"
        />
      </View>
    </View>
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
  textbold:{
    fontSize: 15,
    fontWeight:'bold',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:10
  },
  text:{
    fontSize: 15,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:10
  },
  textinput:{
      height:40,
      margin:10,
      borderWidth:1,
      padding:10
  },
  marginBottom:{
    marginBottom:10,
  },
  marginTop:{
    marginTop:10
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
  }
})

export default CheckAccount