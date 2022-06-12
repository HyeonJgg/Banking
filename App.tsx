import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet,View,Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './Components/Home';
import CreateAcc from './Components/CreateAccount'
import Complete from './Components/CompleteCreate'
import CheckAcc from './Components/CheckAccount'
import MyAcc from './Components/MyAccountStatus'
import Remit from './Components/Remit'
import CompletePost from './Components/CompletePost';
import RecordList from './Components/Records'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() { 
    return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='계좌 생성' component={CreateAcc}/>
        <Stack.Screen name='계좌 생성 완료' component={Complete}/>
        <Stack.Screen name='계좌 조회' component={CheckAcc}/>
        <Stack.Screen name='잔고 현황' component={MyAcc}/>
        <Stack.Screen name='송금' component={Remit}/>
        <Stack.Screen name='송금 완료' component={CompletePost}/>
        <Stack.Screen name='거래내역' component={RecordList}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
  }


const styles = StyleSheet.create({

});


export default App;