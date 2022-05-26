//fragement_center_auth.xml

import React,{Component, ReactElement} from 'react';

import 'react-native-gesture-handler';
import { StyleSheet,View,Text,Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Color = {
  purple : "#dda0dd",
}

function CreateAccount({navigation}: {navigation: any}) {
  //const navigation = useNavigation();

  return (
    <View style={styles.container}>
        {/* <View style = {styles.centeralign}>
            <Text style={styles.text}>망고페이</Text>
        </View> */}
        <View style = {styles.marginBottom}>
            <Text style={styles.textbold}>계좌번호</Text>
            <TextInput style={styles.textinput}
                placeholder="받으실 분의 6자리 계좌번호를 입력하세요."
                keyboardType='numeric' //키보드 종류
            />
        </View>
        <View style = {styles.marginBottom}>
            <Text style={styles.textbold}>금액</Text>
            <TextInput style={styles.textinput}
                placeholder="보내실 금액을 입력하세요."
                // keyboardType='numeric' //키보드 종류
            />
        </View>
        <View style = {styles.marginBottom}>
            <Text style={styles.textbold}>비밀번호</Text>
            <TextInput style={styles.textinput}
                placeholder="비밀번호 4자리를 입력하세요."
                keyboardType='numeric' //키보드 종류
            />
        </View>
        <View style = {styles.marginTop}>
            <Button
                color = {Color.purple}
                title = "바로 송금"
                onPress={()=>
                    navigation.navigate('잔고 현황')}
            />  
        </View>      
    </View>
  );
}

const styles = StyleSheet.create({
  container :{
    flex:1,
    padding:10
    // alignItems:'center',
    // justifyContent:'center',
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
    fontSize: 15,
    fontWeight:'bold',
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
  }
})

export default CreateAccount