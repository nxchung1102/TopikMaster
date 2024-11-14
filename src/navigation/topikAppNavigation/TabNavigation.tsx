import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigationState, useRoute} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import LearnStack from './LearnStack';
import ReportStack from './ReportStack';
import TopikMasterStack from './TopikMasterStack';

const Tab = createBottomTabNavigator();

const GlobalNavigation = () => {
  const route = useRoute<any>();
  const navigationState = useNavigationState(state => state);

  const tabNavigatorState = navigationState.routes.find(
    route => route.name === 'MainBottomTab',
  );

  let currentTabRouteName =
    tabNavigatorState?.state?.routes[
      parseInt(tabNavigatorState.state.index + '')
    ]?.name + '';

  return (
    <Tab.Navigator initialRouteName="TOPIKMasterStack">
      <Tab.Screen
        name="LearnStack"
        component={LearnStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Học bài',
          tabBarIcon: ({focused}) => (
            <>
              <SimpleLineIcons
                name="book-open"
                color={focused ? '#FF5F7A' : '#808D7C'}
                size={20}
              />
            </>
          ),
          tabBarActiveTintColor: '#FF5F7A',
          tabBarInactiveTintColor: '#808D7C',
          tabBarItemStyle:
            currentTabRouteName === 'LearnStack'
              ? {borderTopWidth: 4, borderTopColor: '#FF5F7A', borderRadius: 2}
              : {},
        }}
      />
      <Tab.Screen
        name="TOPIKMasterStack"
        component={TopikMasterStack}
        options={{
          tabBarLabel: 'TOPIK Master',
          headerTitle: '',
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <>
                <Feather
                  name="book"
                  color={
                    focused && route.params.unFocus ? '#FF5F7A' : '#808D7C'
                  }
                  size={20}
                />
              </>
            );
          },
          tabBarActiveTintColor: route.params.unFocus ? '#FF5F7A' : '#808D7C',
          tabBarInactiveTintColor: '#808D7C',
          tabBarItemStyle:
            currentTabRouteName === 'undefined' ||
            (currentTabRouteName === 'TOPIKMasterStack' && route.params.unFocus)
              ? {borderTopWidth: 4, borderTopColor: '#FF5F7A', borderRadius: 2}
              : {},
        }}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('TOPIKMaster');
          },
        })}
      />
      <Tab.Screen
        name="ReportStack"
        component={ReportStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Báo cáo',
          tabBarIcon: ({focused}) => {
            return (
              <>
                <Feather
                  name="clock"
                  color={focused ? '#FF5F7A' : '#808D7C'}
                  size={20}
                />
              </>
            );
          },
          tabBarActiveTintColor: '#FF5F7A',
          tabBarInactiveTintColor: '#808D7C',
          tabBarItemStyle:
            currentTabRouteName === 'ReportStack'
              ? {borderTopWidth: 4, borderTopColor: '#FF5F7A', borderRadius: 2}
              : {},
        }}
      />
    </Tab.Navigator>
  );
};
export default GlobalNavigation;
const styles = StyleSheet.create({
  title: {
    color: '#FF5F7A',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
});
function useState(arg0: string): [any, any] {
  throw new Error('Function not implemented.');
}
