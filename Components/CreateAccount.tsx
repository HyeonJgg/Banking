
import 'react-native-gesture-handler';
import React,{Component, ReactElement, useState} from 'react';
import { StyleSheet,View,Text,Button, TextInput } from 'react-native';
import firestore from'@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import unregisterNativeAndroidModule from '@react-native-community/cli-platform-android/build/link/unregisterNativeModule';

const Color = {
  purple : "#dda0dd",
}

function CreateAccount({navigation}: {navigation: any}) {
  // const navigation = useNavigation();

  const [addacc, setacc] = useState(''); // Hook
  const [addname, setname] = useState('');
  const [addpass, setpass] = useState('');
  const [addbalance, setbalance] = useState('');

  const users = firestore().collection('users');

  function createUsers() {
    users.add({
      account : addacc,
      name : addname,
      password : addpass,
      initbalance : addbalance
    })
    setacc('');
    setname('');
    setpass('');
    setbalance('');
  };
  return (
    <View style={styles.container}>
      {/* <View style = {styles.centeralign}>
          <Text style={styles.text}>망고페이</Text>
      </View> */}
      <View style = {styles.marginBottom}>
        <Text style={styles.textbold}>계좌번호</Text>
        <TextInput style={styles.textinput}
          placeholder="6자리 숫자를 입력하세요."
          keyboardType='numeric' //키보드 종류
          value={addacc}
          onChange={e=>setacc(e.nativeEvent.text)}
        />
      </View>
        <View style = {styles.marginBottom}>
          <Text style={styles.textbold}>이름</Text>
          <TextInput style={styles.textinput}
            placeholder="이름을 입력하세요."
            // keyboardType='numeric' //키보드 종류
            value={addname}
            onChange={e=>setname(e.nativeEvent.text)}
          />
        </View>
      <View style = {styles.marginBottom}>
        <Text style={styles.textbold}>비밀번호</Text>
        <TextInput style={styles.textinput}
          placeholder="비밀번호 4자리를 입력하세요."
          keyboardType='numeric' //키보드 종류
          value={addpass}
          onChange={e=>setpass(e.nativeEvent.text)}
        />
      </View>
      <View style = {styles.marginBottom}>
        <Text style={styles.textbold}>초기잔액</Text>
        <TextInput style={styles.textinput}
          placeholder="초기 잔액을 설정하세요."
          keyboardType='numeric' //키보드 종류
          value={addbalance}
          onChange={e=>setbalance(e.nativeEvent.text)}
        />
      </View>
      <View style = {styles.marginTop}>
        <Button
          color = {Color.purple}
          title = "계좌 생성하기"
          onPress={(e)=>{
            e.preventDefault();
            createUsers();
            navigation.navigate('계좌 생성 완료');
          }}
        />  
      </View>      
    </View>
  );
};

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