import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Report from '../../screens/Topik/Report';
import Detail from '../../screens/Topik/exam/DetailCourse';

const TopikStack = createNativeStackNavigator();

const ReportStack = () => {
  return (
    <TopikStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <TopikStack.Screen name="Report" component={Report} />
      <TopikStack.Screen name="DetailCourse" component={Detail} />
    </TopikStack.Navigator>
  );
};
export default ReportStack;
