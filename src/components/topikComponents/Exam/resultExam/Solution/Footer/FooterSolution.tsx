import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LightPink} from '../../../../../../util/Theme/ThemeGlobal';
import BtnNext from './BtnNext';
import BtnShowTable from './BtnShowTable';
import BtnPre from './BtnPre';

const FooterSolution = () => {
  return (
    <View
      style={{backgroundColor: LightPink, flexDirection: 'row', padding: 5}}>
      <BtnPre />
      <BtnShowTable />
      <BtnNext />
    </View>
  );
};

export default FooterSolution;

const styles = StyleSheet.create({});
