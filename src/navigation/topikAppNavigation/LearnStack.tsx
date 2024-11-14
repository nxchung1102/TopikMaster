import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Learn from '../../screens/Topik/Learn';
import Detail from '../../screens/Topik/exam/DetailCourse';

const TopikStack = createNativeStackNavigator();

const LearnStack = () => {
  return (
    <TopikStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <TopikStack.Screen name="Learn" component={Learn} />
      <TopikStack.Screen name="DetailCourse" component={Detail} />
    </TopikStack.Navigator>
  );
};
export default LearnStack;
