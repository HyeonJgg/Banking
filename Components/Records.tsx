// import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { StyleSheet,View,Text,Button } from 'react-native';
import firestore from'@react-native-firebase/firestore';
import {username, useracc} from './CheckAccount';

const Color = {
  purple : "#dda0dd",
}
// let content = '';
function RecordList({navigation}: {navigation: any}) {
    const records = firestore().collection('records')

    const [content, setcontent]=useState('');
    // let content = '';
    let array = [1+'\n', 2, 3, 4, 5]
    let id = 0;
   
    records.where('myaccount','==',useracc).get().then((doc)=>{
      doc.forEach((doc)=>{
        if(doc.exists){
          console.log('거래내역');
          // console.log(doc.data());
          setcontent(doc.data().record) ;
          // content = doc.data().record;
          console.log(content);  
        } 
      });
    })

  return (
    <View style={styles.container}>
      <View style = {styles.centeralign}>
        <Text style={styles.bigtext}>Mango Pay 입출금 {useracc}</Text>
      </View>
      <View style = {styles.marginBottom}>
        <Text style={styles.textbold}>* 거래내역</Text>
        <Text style={styles.text}>{content}</Text>
      </View>
      <View style = {styles.marginTop}>
        <Button
            color = {Color.purple}
            title = "확인"
            onPress={()=>{
              navigation.navigate('잔고 현황');
              setcontent('');
              // content='';
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
  bigtext:{
    fontSize: 18,
    fontWeight:'bold',
    alignItems:'center',
    justifyContent:'center',
    paddingTop:10,
    marginBottom:20
  },
  textbold:{
    fontSize: 16,
    fontWeight:'bold',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:20,
  },
  text:{
    fontSize: 16,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:10,
    paddingLeft : 10
  },
  marginBottom:{
    marginBottom:10,
  },
  marginTop:{
    marginTop:10
  }
})

export default RecordList