// import 'react-native-gesture-handler';
import React,{ useState } from 'react';
import { StyleSheet,View,Text,Button, TextInput, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const Color = {
  purple : "#dda0dd",
}

// let balance = 0;
let username = '';
let useracc = '';

function CheckAccount({navigation}: {navigation: any}) {
 
  const [inputacc, setacc] = useState(''); // Hook
  const user = firestore().collection('users');

  function checkuser(){
    if (inputacc!=''){
      user.where('account','==',inputacc).get().then((doc)=>{
        doc.forEach((doc)=>{
          if(doc.exists){
              console.log(doc.data().account, doc.data().initbalance); //데이터 전체 가져오기
            // balance=Number(doc.data().initbalance);
              username = doc.data().name;
              useracc = doc.data().account; // 유일성 -> 추후 계좌번호로 조회시 하나의 정보만 나옴
              navigation.navigate('잔고 현황');
          }
        });
        if(useracc==''){
          Alert.alert('없는 계좌입니다.');
          setacc('');
        }
      });
    }else{
      Alert.alert('계좌번호를 입력해주세요.');
    }
  };
  return (
    <View style={styles.container}>
      <View style = {styles.marginBottom}>
        <Text style={styles.textbold}>계좌번호</Text>
        <TextInput style={styles.textinput}
          placeholder="계좌번호 6자리를 입력하세요."
          maxLength={6}
          keyboardType='numeric' //키보드 종류
          value={inputacc}
          onChange={e=>setacc(e.nativeEvent.text)}
        />
      </View>
      <View style = {styles.marginTop}>
        <Button
          color = {Color.purple}
          title = "입력"
          onPress={(e)=>{
            e.preventDefault();
            checkuser();
          }}           
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

export default CheckAccount
export { username, useracc}