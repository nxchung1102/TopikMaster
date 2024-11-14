import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {LightPink} from '../../../../util/Theme/ThemeGlobal';
import BtnNext from './BtnNext';
import BtnPrevious from './BtnPrevious';
import BtnTableQuestion from './BtnTableQuestion';
import {ExamContext} from '../../../Context/Topik/Exam/DoingExamProvider';

const FooterExam = () => {
  const {webviewRef} = useContext(ExamContext);
  return (
    <View
      style={{
        flex: 1.3,
        backgroundColor: LightPink,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: '2%',
      }}
      onTouchEnd={() => {
        webviewRef?.current?.postMessage('unfocusInput');
      }}>
      <BtnPrevious />
      <BtnTableQuestion />
      <BtnNext />
    </View>
  );
};

export default FooterExam;

const styles = StyleSheet.create({});
