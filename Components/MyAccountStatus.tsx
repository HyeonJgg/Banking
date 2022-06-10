// import 'react-native-gesture-handler';
import React,{ useState } from 'react';
import { StyleSheet,View,Text,Button} from 'react-native';
import firestore from'@react-native-firebase/firestore';
import { username, useracc} from './CheckAccount';

const Color = {
  purple : "#dda0dd",
}

function CheckAccount({navigation}: {navigation: any}) {

  const users = firestore().collection('users');

  const [nowmoney, setmoney] = useState(0);

  users.where('account','==',useracc).get().then((doc)=>{
    doc.forEach((doc)=>{
      if(doc.exists){
        setmoney(doc.data().initbalance);
        console.log('계좌 조회');
        console.log(doc.data());
      }
    });
  })

  const readbalance=()=>{
    users.where('account','==',useracc).get().then((doc)=>{
      doc.forEach((doc)=>{
        if(doc.exists){
          setmoney(doc.data().initbalance);
          console.log('잔액 조회');
          console.log(doc.data());
        }
      });
    })
  };

  return (
    <View style={styles.container}>
      <View style = {styles.marginBottom}>
        <Text style={styles.textbold}>{username}님의 잔고 현황</Text>
        <Text style={styles.text}>{nowmoney}</Text>
      </View>
      <View style = {styles.size}>
        <Button
          color = {Color.purple}
          title = "잔액 조회"
          onPress={(e)=>{
            e.preventDefault();
            readbalance();
          }}
        />
      </View>  
      <View style = {styles.marginTop}>
        <Button
          color = {Color.purple}
          title = "송금"
          onPress={(e)=>{
            e.preventDefault();
            navigation.navigate('송금');
          }}
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
  marginBottom:{
    marginBottom:10,
  },
  marginTop:{
    marginTop:10
  },
  size:{
    paddingLeft:290,
    width:390,
    height:35
  }
})

export default CheckAccount