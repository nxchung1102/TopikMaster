import React from 'react';
import {StyleSheet, View} from 'react-native';
import HeaderRight from '../Exam/HeaderRight';

const ReportHeader = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        maxHeight: '10%',
        flex: 1,
      }}>
      <HeaderRight />
    </View>
  );
};

export default ReportHeader;

const styles = StyleSheet.create({});
