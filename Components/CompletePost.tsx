// import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet,View,ScrollView,Text,Button } from 'react-native';
import { money, getname } from './Remit';

const Color = {
  purple : "#dda0dd",
}

function CompletePost({navigation}: {navigation: any}) {

  return (
    <ScrollView style={styles.container}>
      <View style = {styles.marginBottom}>
        <Text style={styles.textbold}>{getname}님에게 {money}원을 보냈습니다.</Text>
      </View>
      <View style = {styles.marginTop}>
        <Button
          color = {Color.purple}
          title = "확인"
          onPress={(e)=>{
            navigation.navigate('잔고 현황');
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
    fontSize: 20,
    fontWeight:'bold',
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

export default CompletePost
