// import 'react-native-gesture-handler';
import React,{ useState } from 'react';
import { StyleSheet,View,ScrollView,Text,Button, TextInput, Alert } from 'react-native';
import firestore from'@react-native-firebase/firestore';
import {balance, useracc} from './CheckAccount';

const Color = {
  purple : "#dda0dd",
}

let checkaccn = '';
let getname = '';
let getacc = '';
let money = 0;
let statusmoney = 0;

function CreateAccount({navigation}: {navigation: any}) {
  const [inputacc, setacc] = useState(''); // Hook
  const [postmoney, setpost] = useState('');
  const [inputpass, setpass] = useState('');

  const users = firestore().collection('users');

  
  function checkacc(){
    users.where('account','==',inputacc).get().then((doc)=>{
      doc.forEach((doc)=>{
        if(doc.exists){
          checkaccn = doc.data().account;
          getname = doc.data().name;
          getacc = doc.data().acc;
          console.log(doc.data()); //데이터 전체 가져오기
        }
      });
      if(checkaccn==''){
        if(inputacc==''){
          Alert.alert('계좌번호를 입력해주세요.');
        }else{
          Alert.alert('받으실 분의 계좌번호가 존재하지 않습니다.');
          setacc('');
        }
      }else{
        Alert.alert(getname + '님이 맞으십니까?');
        setacc(inputacc);
      }
    })
    setacc('');
    console.log(2.+checkaccn);
  };
  function checkpassword(){
    let checkpass=0;
    users.where('account', '==', useracc).get().then((doc)=>{
      doc.forEach((doc)=>{
        if(doc.exists){
          checkpass=doc.data().password;
          console.log(doc.data());
        }
      });
      if(checkpass==Number(inputpass)){
        Alert.alert('비밀번호가 확인되었습니다.');
        setpass(inputpass);
      }else{
        Alert.alert('비밀번호를 다시 입력해주세요.');
        setpass('');
      }
    });
    setpass('');
  };
  money = Number(postmoney);
  function postupdateDB(){
    users.where('account','==',useracc).get().then((doc)=>{
      doc.forEach((doc)=>{
        if(doc.exists){
          if(balance>=money && money>0){
            statusmoney=balance-money;
            console.log(statusmoney);
            doc.ref.update({initbalance:balance-money});
            console.log('보내는 계좌 업데이트');
            console.log(doc.data());
            getupdateDB();
            navigation.navigate('송금 완료');
            setpost(postmoney);
          }else{
            Alert.alert("잔고가 부족합니다.");
            setpost('');
          }
        }
      });
    })
  };
  function getupdateDB(){
    console.log(getname);
    users.where('account','==',getacc).get().then((doc)=>{
      doc.forEach((doc)=>{
        if(doc.exists){
          doc.ref.update({initbalance:doc.data().initbalance+money});
          console.log('받는 계좌 업데이트');
          console.log(doc.data());
        }
      });
    });
  };
  return (
    <ScrollView style={styles.container}>
      <View style = {styles.marginBottom}>
        <Text style={styles.textbold}>계좌번호</Text>
        <TextInput style={styles.textinput}
            placeholder="받으실 분의 계좌번호 6자리를 입력하세요."
            maxLength={6}
            keyboardType='numeric' //키보드 종류
            value={inputacc}
            onChange={e=>setacc(e.nativeEvent.text)}
        />
      </View>
      <View style={styles.size}>
          <Button
            color = {Color.purple}
            title="계좌번호 확인"
            onPress={(e)=>{
              e.preventDefault();
              checkacc();
            }}
          />
      </View>
      <View style = {styles.marginBottom}>
        <Text style={styles.textbold}>금액</Text>
        <TextInput style={styles.textinput}
            placeholder="보내실 금액을 입력하세요."
            keyboardType='numeric'// keyboardType='numeric' //키보드 종류
            value={postmoney}
            onChange={e=>setpost(e.nativeEvent.text)}
        />
      </View>
      <View style = {styles.marginBottom}>
        <Text style={styles.textbold}>비밀번호</Text>
        <TextInput style={styles.textinput}
            placeholder="비밀번호 4자리를 입력하세요."
            maxLength={4}
            keyboardType='numeric' //키보드 종류
            value={inputpass}
            onChange={e=>setpass(e.nativeEvent.text)}
        />
      </View>
      <View style={styles.size}>
          <Button
            color = {Color.purple}
            title="비밀번호 확인"
            onPress={(e)=>{
              e.preventDefault();
              checkpassword();
            }}
          />
      </View>
      <View style = {styles.marginTop}>
        <Button
          color = {Color.purple}
          title = "바로 송금"
          onPress={(e)=>{
            e.preventDefault();
            // money = Number(postmoney);
            postupdateDB();
            // getupdateDB();
            // setacc('');
            // setpass('');
            
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
  size:{
    paddingLeft:280,
    width:380,
    height:35
  }
})

export default CreateAccount
export {money, getname, statusmoney}