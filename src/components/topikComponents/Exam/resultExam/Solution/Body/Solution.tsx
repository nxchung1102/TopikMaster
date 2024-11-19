import React, {useContext, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {RenderResultData} from './Web/RenderResultData';
import {TemplateResult} from './Web/TemplateResult';
import WebViewResult from './Web/WebViewResult';
import {useDataResult} from '../../../../../Context/Topik/Result/ResultExamProvider';
import TableSolution from '../Footer/TableSolution';
import {Light} from '../../../../../../util/Theme/ThemeGlobal';
const Solution = () => {
  const {typeSection, data, idxPart, idxQuestion, setIsShow} = useDataResult();
  const html =
    data &&
    RenderResultData(parseInt(typeSection + ''), data, idxPart, idxQuestion);

  return (
    <View
      style={{
        flex: 1,
        position: 'relative',
        paddingVertical: 20,
        backgroundColor: Light,
      }}
      onTouchEnd={() => {
        setIsShow(false);
      }}>
      <WebViewResult html={html ? html : ''} />
      <TableSolution />
    </View>
  );
};

export default Solution;

const styles = StyleSheet.create({});
