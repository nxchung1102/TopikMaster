import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import DoingExam from '../../screens/Topik/exam/DoingExam';
import InfoExam from '../../screens/Topik/exam/InfoExam';
import ResultExam from '../../screens/Topik/exam/ResultExam';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();
const StackMainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="MainBottomTab">
        <Stack.Screen
          name="MainBottomTab"
          component={TabNavigation}
          initialParams={{unFocus: true}}
        />
        <Stack.Screen name="ResultExam" component={ResultExam} />
        <Stack.Screen name="InfoExam" component={InfoExam} />
        <Stack.Screen name="DoingExam" component={DoingExam} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackMainNavigation;
