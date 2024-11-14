import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import DetailCourse from '../../screens/Topik/exam/DetailCourse';
import Topik from '../../screens/Topik/exam/Topik';

const TopikStack = createNativeStackNavigator();

const TopikMasterStack = () => {
  return (
    <TopikStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="TOPIKMaster">
      <TopikStack.Screen name="TOPIKMaster" component={Topik} />
      <TopikStack.Screen
        name="DetailCourse"
        component={DetailCourse}
        initialParams={{idCourse: '', isHover: ''}}
      />
    </TopikStack.Navigator>
  );
};
export default TopikMasterStack;
const styles = StyleSheet.create({});
