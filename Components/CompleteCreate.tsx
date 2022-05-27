// import 'react-native-gesture-handler';
import React,{Component, ReactElement} from 'react';
import { StyleSheet,View,Text,Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Color = {
  purple : "#dda0dd",
}

function CompleteCreate({navigation}: {navigation: any}) {
  //const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style = {styles.centeralign}>
            <Text style={styles.textbold}>새로운 계좌가 생성되었습니다.</Text>
        </View>
        <View style = {styles.marginBottom}>
            <Text style={styles.textbold}>계좌번호</Text>
            <Text style={styles.text}>계좌번호 출력</Text>
        </View>
        <View style = {styles.marginBottom}>
            <Text style={styles.textbold}>이름</Text>
            <Text style={styles.text}>이름 출력</Text>
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
    // alignItems:'center',
    // justifyContent:'center',
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

export default CompleteCreate