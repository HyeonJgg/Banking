import React,{Component, ReactElement} from 'react';
import 'react-native-gesture-handler';
import { StyleSheet,View,Text,Button,TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { color } from 'react-native-reanimated';

const Color = {
  purple : "#dda0dd",
}
// const Margin = {
//   marginBottom : 10
// }

function HomeScreen({navigation}: {navigation: any}) {
  //const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.centeralign}>
        <Image
          source = {require('../assets/image/mango-pay-removebg.png')}
          style={{width: 250, height:250, marginTop:10, marginBottom:10}}
        />
      </View>
      <View style = {styles.margin}>
        <Button
          color = {Color.purple}
          title = "계좌 생성"
          onPress={()=>
            navigation.navigate('계좌 생성')}
            //CenterAuthHome으로
        />
      </View>
      <View style = {styles.margin}>
        <Button
          color = {Color.purple}
          title = "계좌 조회"
          onPress={()=>
            navigation.navigate('계좌 조회')}
            //SelfAuthHome으로
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
  text:{
    fontSize: 15, 
    marginBottom:10
  },
  margin:{
    marginBottom:10,
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

export default HomeScreen;