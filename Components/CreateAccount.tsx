// import 'react-native-gesture-handler';
import React,{ useState } from 'react';
import { StyleSheet,View,ScrollView,Text,Button, TextInput, Alert } from 'react-native';
import firestore from'@react-native-firebase/firestore';

const Color = {
  purple : "#dda0dd",
}

let newacc = ''
let newname = ''
let newinit = ''
let checkaccn = '';

function CreateAccount({navigation}: {navigation: any}) {

  const [addacc, setacc] = useState(''); // Hook
  const [addname, setname] = useState('');
  const [addpass, setpass] = useState('');
  const [addbalance, setbalance] = useState('');

  const users = firestore().collection('users');

  function checkacc(){
    users.where('account','==',addacc).get().then((doc)=>{
      doc.forEach((doc)=>{
        if(doc.exists){
          checkaccn = doc.data().account;
          console.log('계좌 생성');
          console.log(doc.data()); //데이터 전체 가져오기
        }
      });
      if(checkaccn==''){
        if(addacc==''){
          Alert.alert('계좌번호를 입력해주세요.');
        }else{
          Alert.alert('사용하실 수 있는 계좌번호입니다.');
          checkaccn='';
          setacc(addacc);
        }
      }else{
        Alert.alert('동일계좌가 존재합니다.');
        checkaccn='';
        setacc('');
      }
    })
  };
  function createUsers() {
    if(addacc == ''){
      Alert.alert('계좌번호를 입력해주세요.');
    }else if(addname == ''){
      Alert.alert('이름을 입력해주세요.');
    }else if(addpass == ''){
      Alert.alert('비밀번호를 입력해주세요.');
    }else if(addbalance == ''){
      Alert.alert('초기잔액을 설정해주세요.');
    }else{
      users.add({
        account : addacc,
        name : addname,
        password : addpass,
        initbalance : addbalance
      })
      newacc = addacc;
      newname = addname;
      newinit = addbalance;
      setacc('');
      setname('');
      setpass('');
      setbalance('');
      navigation.navigate('계좌 생성 완료');
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style = {styles.marginBottom}>
        <Text style={styles.textbold}>계좌번호</Text>
        <TextInput style={styles.textinput}
          placeholder="6자리 숫자를 입력하세요."
          maxLength={6}
          keyboardType='numeric' //키보드 종류
          value={addacc}
          onChange={e=>setacc(e.nativeEvent.text)} //현재 입력되는 값(없으면 입력 제대로 안됨)
        />
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
      </View>
        <View style = {styles.marginBottom}>
          <Text style={styles.textbold}>이름</Text>
          <TextInput style={styles.textinput}
            placeholder="이름을 입력하세요."
            value={addname}
            onChange={e=>setname(e.nativeEvent.text)} 
          />
        </View>
      <View style = {styles.marginBottom}>
        <Text style={styles.textbold}>비밀번호</Text>
        <TextInput style={styles.textinput}
          placeholder="비밀번호 4자리를 입력하세요."
          maxLength={4}
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
            e.preventDefault(); // 이벤트 기본 기능 방지
            createUsers();
          }}
        />  
      </View>      
    </ScrollView>
  );
};

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
export { newacc, newname, newinit}