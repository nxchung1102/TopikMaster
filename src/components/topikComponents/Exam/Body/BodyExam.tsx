import React, {useContext, useEffect, useMemo, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {getExamDoing} from '../../../../Service/topikService/axiosTopik';
import {Light} from '../../../../util/Theme/ThemeGlobal';
import {ExamContext} from '../../../Context/Topik/Exam/DoingExamProvider';
import TableQuestion from '../Footer/TableQuestion';
import {RenderData} from './Webview/RenderData';
import WebViewDoing from './Webview/WebViewDoing';
import {getIdxByQuestion} from '../../../../util/topik/getIdxByCurrQuestion';
import {DoingExamType} from '../../../../util/GlobalType';

interface BodyExamProps {
  ieltsId: string;
  dataStore?: any;
}
const BodyExam = (props: BodyExamProps) => {
  const {ieltsId, dataStore} = props;
  const {
    setIsShowTable,
    idxPart,
    idxQuestion,
    setLstQuestion,
    lstQuestion,
    setExamData,
    examData,
    setIdxPart,
    setIdxQuestion,
    setAudioTime,
    audioTime,
    setStopStorage,
  } = useContext(ExamContext);
  const {partNumber, questionNumber} = getIdxByQuestion(
    parseInt(dataStore && dataStore.currentQ),
    examData,
  );
  useEffect(() => {
    setIdxPart(partNumber);
    setIdxQuestion(questionNumber);
    setAudioTime(parseInt(dataStore.currentTime));
    if (examData?.data.typeSection === 1) {
      setStopStorage(true);
    }
  }, [partNumber, questionNumber]);

  useEffect(() => {
    getExamDoing(ieltsId)
      .then(res => {
        setExamData(res);
        const listInitial: DoingExamType = res;
        if (listInitial && lstQuestion.length <= 0) {
          const ListInitial = listInitial.data.questions.map(item => ({
            index: item.index,
            indexTitle: item.indexTitle,
            stepId: item.stepId,
            partNumber: item.partNumber,
            answer: null,
            answerInput: null,
          }));
          setLstQuestion(ListInitial);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const html = RenderData(
    examData,
    idxPart,
    idxQuestion,
    lstQuestion,
    audioTime,
  );

  return (
    <View
      style={{
        flex: 15,
        backgroundColor: Light,
        paddingVertical: 10,
        position: 'relative',
      }}
      onTouchEnd={() => {
        setIsShowTable(false);
      }}>
      <WebViewDoing html={html} />
      <TableQuestion />
    </View>
  );
};

export default BodyExam;

const styles = StyleSheet.create({});
