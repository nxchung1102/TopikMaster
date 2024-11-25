import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {DarkPink} from '../../../../../../util/Theme/ThemeGlobal';
import {useDataResult} from '../../../../../Context/Topik/Result/ResultExamProvider';

const BtnShowTable = () => {
  const {isShow, setIsShow} = useDataResult();
  return (
    <Pressable
      style={{
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: DarkPink,
        alignItems: 'center',
        padding: 8,
        borderRadius: 8,
      }}
      onPress={() => {
        setIsShow(!isShow);
      }}>
      <Feather name={isShow ? 'x' : 'list'} size={25} color={DarkPink} />
      <Text style={{fontSize: 16, color: DarkPink}}> Danh sách câu hỏi</Text>
    </Pressable>
  );
};

export default BtnShowTable;

const styles = StyleSheet.create({});
