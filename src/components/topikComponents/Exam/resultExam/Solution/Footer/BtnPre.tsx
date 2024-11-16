import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {DarkGray} from '../../../../../../util/Theme/ThemeGlobal';

const BtnPre = () => {
  return (
    <Pressable
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <MaterialIcons name="navigate-before" color={DarkGray} size={30} />
      <Text style={{color: DarkGray, fontSize: 16}}>Câu trước</Text>
    </Pressable>
  );
};

export default BtnPre;

const styles = StyleSheet.create({});
