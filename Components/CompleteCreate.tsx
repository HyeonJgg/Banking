// import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet,View,Text,Button } from 'react-native';
import {newacc, newname, newinit} from './CreateAccount';

const Color = {
  purple : "#dda0dd",
}

function CompleteCreate({navigation}: {navigation: any}) {

  return (
    <View style={styles.container}>
      <View style = {styles.centeralign}>
        <Text style={styles.textbold}>계좌가 생성되었습니다.</Text>
      </View>
      <View style = {styles.marginBottom}>
        <Text style={styles.textbold}>계좌번호</Text>
        <Text style={styles.text}>{newacc}</Text>
      </View>
      <View style = {styles.marginBottom}>
        <Text style={styles.textbold}>이름</Text>
        <Text style={styles.text}>{newname}</Text>
      </View>
      <View style = {styles.marginBottom}>
        <Text style={styles.textbold}>현재 잔액</Text>
        <Text style={styles.text}>{newinit}</Text>
      </View>
      <View style = {styles.marginTop}>
        <Button
            color = {Color.purple}
            title = "확인 완료"
            onPress={()=>
                navigation.navigate('Home')}
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
    marginTop:20
  }
})

export default CompleteCreate