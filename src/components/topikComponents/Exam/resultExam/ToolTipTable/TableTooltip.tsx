import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Light, LightGray} from '../../../../../util/Theme/ThemeGlobal';
import Scale from './Scale';
import ScaleSecond from './ScaleSecond';
import TableHeader from './TableHeader';

const TableTooltip = () => {
  return (
    <SafeAreaView
      style={{borderWidth: 1, borderColor: LightGray, backgroundColor: Light}}>
      <View style={{flexDirection: 'row'}}>
        <TableHeader content="Trình độ" space={140} />
        <TableHeader content="Trình độ" space={70} />
        <TableHeader content="Điểm đỗ" space={120} />
      </View>
      <Scale />
      <ScaleSecond />
    </SafeAreaView>
  );
};

export default TableTooltip;
