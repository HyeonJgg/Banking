// import 'react-native-gesture-handler';
import React,{ useState } from 'react';
import { StyleSheet,View,ScrollView,Text,Button, TextInput, Alert } from 'react-native';
import firestore from'@react-native-firebase/firestore';
import {username,useracc} from './CheckAccount';

const Color = {
  purple : "#dda0dd",
}

let checkaccn = '';
let getname = '';
let getacc = '';
let comgetname = ''
let money = 0;


function CreateAccount({navigation}: {navigation: any}) {
  const date = new Date();
  const [inputacc, setacc] = useState(''); // Hook
  const [postmoney, setpost] = useState('');
  const [inputpass, setpass] = useState('');

  const users = firestore().collection('users');
  const records = firestore().collection('records')

  function checkacc(){
    users.where('account','==',inputacc).get().then((doc)=>{
      doc.forEach((doc)=>{
        if(doc.exists){
          checkaccn = doc.data().account;
          getname = doc.data().name;
          comgetname = getname;
          getacc = doc.data().account;
          console.log('계좌번호 확인');
          console.log(doc.data()); //데이터 전체 가져오기
          console.log(getacc);
        }
      });
      if(checkaccn==''){
        if(inputacc==''){
          Alert.alert('계좌번호를 입력해주세요.');
        }else{
          Alert.alert('받으실 분의 계좌가 존재하지 않습니다.');
          checkaccn=='';
          setacc('');
        }
      }else if(checkaccn==useracc){
        Alert.alert('출금계좌와 입금계좌가 동일합니다.');
        checkaccn=='';
        setacc('');
      }
      else{
        Alert.alert(comgetname + '님이 맞으십니까?');
        checkaccn=='';
        setacc(inputacc);
      }
    })
    setacc('');
  };
  let checkpass=0;
  let checkbtn = 0;
  function checkpassword(){
    users.where('account', '==', useracc).get().then((doc)=>{
      doc.forEach((doc)=>{
        if(doc.exists){
          checkpass=doc.data().password;
          // checkbtn=checkpass;
          console.log(doc.data());
        }
      });
      if(checkpass==Number(inputpass)){
        Alert.alert('비밀번호가 확인되었습니다.');
        checkpass=0;
        setpass(inputpass);
      }else{
        Alert.alert('비밀번호를 다시 입력해주세요.');
        checkpass=0;
        setpass('');
      }
    });
    setpass('');
  };
  // function passnext(){
  //   if(checkbtn == 0){
  //     Alert.alert('비밀번호 확인 버튼을 누르세요');
  //   }
  //   else{
  //     postupdateDB();
  //     navigation.navigate('송금 완료');
  //   }
  // }
  let statusmoney = 0;
  money = Number(postmoney);
  function postupdateDB(){
    users.where('account','==',useracc).get().then((doc)=>{
      doc.forEach((doc)=>{
        if(doc.exists){
          let balance = doc.data().initbalance;
          if(balance >= money && money > 0){
            statusmoney=balance-money;
            doc.ref.update({initbalance:statusmoney});
            console.log('보내는 계좌 업데이트');
            console.log(doc.data());
            recordpadd();
            getupdateDB();
            navigation.navigate('송금 완료');
          }else{
            Alert.alert("잔고가 부족합니다.");
            setpost('');
          }
        }
      });
    });
  };
  let gbalance = 0;
  function getupdateDB(){
    users.where('account','==',getacc).get().then((doc)=>{
      doc.forEach((doc)=>{
        if(doc.exists){
          gbalance = doc.data().initbalance + money;
          doc.ref.update({initbalance:gbalance});
          console.log('받는 계좌 업데이트');
          console.log(doc.data());
          records.add({
            content : "입금",
            myaccount : getacc,
            record : (date.getMonth()+1) + '/' + date.getDate() +'   '+ date.getHours() + ':' + date.getMinutes()
            + '       ' + username +'   '+ money + '  잔액  ' + gbalance
          });
        }
      });
    });
    
  };
  function recordpadd(){
    records.add({
      content : "출금",
      myaccount : useracc,
      record : (date.getMonth()+1) + '/' + date.getDate() +'   '+ date.getHours() + ':' + date.getMinutes()
      + '       ' + comgetname +'   '+ -money + '       잔액   ' + statusmoney
    });
  };
  // function recordgadd(){
  //   records.add({
      // content : '입금',
      // myaccount : getacc,
      // gpuser : username,
      // gpmoney : money,
      // gpbalance : gbalance,
      // gpyear : date.getFullYear(),
      // gpdate : (date.getMonth()+1) + '/' + date.getDate(),
      // gptime : date.getHours() + ':' + date.getMinutes()
    //   content : "입금",
    //   myaccount : getacc,
    //   record : (date.getMonth()+1) + '/' + date.getDate() +' '+ date.getHours() + ':' + date.getMinutes()
    //   + ' ' + username +'   '+ money + '잔액' + gbalance

    // })
  // }
  return (
    <ScrollView style={styles.container}>
      <View style = {styles.marginBottom}>
        <Text style={styles.textbold}>계좌번호</Text>
        <Text style={styles.textname}>{getname}</Text>
        <TextInput style={styles.textinput}
            placeholder="받으실 분의 계좌번호 6자리를 입력하세요."
            maxLength={6}
            keyboardType='numeric' //키보드 종류
            value={inputacc}
            textContentType='password'
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
            // passnext();
            postupdateDB();
            getname='';
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
    fontSize: 15,
    fontWeight:'bold',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:10
  },
  textname:{
    fontSize: 15,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:12
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
export {money, comgetname}