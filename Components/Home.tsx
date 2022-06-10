// import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet,View,Text,Button,TouchableOpacity, Image} from 'react-native';

const Color = {
  purple : "#dda0dd",
}

function HomeScreen({navigation}: {navigation: any}) {
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
        />
      </View>
      <View style = {styles.margin}>
        <Button
          color = {Color.purple}
          title = "계좌 조회"
          onPress={()=>
            navigation.navigate('계좌 조회')}
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
  }
})

export default HomeScreen;