import React, {useContext, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {RenderResultData} from './Web/RenderResultData';
import {TemplateResult} from './Web/TemplateResult';
import WebViewResult from './Web/WebViewResult';
import {useDataResult} from '../../../../../Context/Topik/Result/ResultExamProvider';
const Solution = () => {
  const {typeSection, data, idxPart, idxQuestion} = useDataResult();
  const html =
    data &&
    RenderResultData(parseInt(typeSection + ''), data, idxPart, idxQuestion);
  console.log(html);

  return (
    <View style={{flex: 1}}>{<WebViewResult html={html ? html : ''} />}</View>
  );
};

export default Solution;

const styles = StyleSheet.create({});
