import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {DarkGray} from '../../../../../../util/Theme/ThemeGlobal';

const BtnNext = () => {
  return (
    <Pressable
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
      <Text style={{color: DarkGray, fontSize: 16}}>Câu sau</Text>
      <MaterialIcons name="navigate-next" color={DarkGray} size={30} />
    </Pressable>
  );
};

export default BtnNext;

const styles = StyleSheet.create({});
