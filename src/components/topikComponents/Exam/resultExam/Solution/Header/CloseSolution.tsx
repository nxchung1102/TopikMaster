import {
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const CloseSolution = () => {
  const navigation = useNavigation<any>();
  return (
    <Pressable
      style={{flexDirection: 'row', alignItems: 'center'}}
      onPress={() => {
        navigation.goBack();
      }}>
      <AntDesign name="close" size={25} />
      <Text>Thoát</Text>
    </Pressable>
  );
};

export default CloseSolution;

const styles = StyleSheet.create({});
