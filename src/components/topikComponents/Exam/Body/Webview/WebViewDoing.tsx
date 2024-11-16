import React, {useContext, useEffect} from 'react';
import {Platform, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';
import {
  getAnwser,
  saveAnwser,
} from '../../../../../Service/topikService/axiosTopik';
import {ExamContext} from '../../../../Context/Topik/Exam/DoingExamProvider';
import {WebViewHandler} from './WebViewHandle/WebViewHandler';
import {AnswerSelectProps} from '../../../../../util/GlobalType';
interface WebViewDoingProps {
  html: string;
}
let baseUrl = 'file:///android_asset/';
if (Platform.OS === 'ios') {
  baseUrl = 'web/';
}
const WebViewDoing = (props: WebViewDoingProps) => {
  const {
    examData,
    setIdxPart,
    setIdxQuestion,
    idxPart,
    idxQuestion,
    reqAnwser,
    setReqAnwser,
    lstQuestion,
    webviewRef,
    setResAnwser,
    setAudioTime,
    stopStorage,
  } = useContext(ExamContext);
  const {html} = props;
  useEffect(() => {
    console.log(reqAnwser);
    const url = examData?.data.preSignedUrlAnswerUser + '';
    saveAnwser(url, reqAnwser)
      .then(rs => {
        console.log(rs);
      })
      .catch(err => console.log(err));
    getAnwser(examData?.data.fileAnswerUser + '')
      .then(rs => {
        let data: AnswerSelectProps[] = rs;
        data.map(item => {
          lstQuestion.map(ques => {
            if (
              ques.stepId === item.stepId &&
              examData?.data.typeSection !== 3
            ) {
              ques.answer = item.dataOptionId && item.dataOptionId[0];
            } else if (ques.stepId === item.stepId) {
              ques.answerInput = item.dataOptionText;
            }
          });
        });
        setResAnwser(rs);
      })
      .catch(err => console.log(err));
  }, [reqAnwser, idxPart, idxQuestion, lstQuestion]);

  return (
    <WebView
      scalesPageToFit={false}
      ref={webviewRef}
      javaScriptEnabled
      domStorageEnabled
      showsVerticalScrollIndicator={false}
      startInLoadingState={true}
      mediaPlaybackRequiresUserAction={false}
      originWhitelist={['*']}
      onMessage={event =>
        WebViewHandler({
          event,
          examData,
          setIdxPart,
          setIdxQuestion,
          idxPart,
          idxQuestion,
          reqAnwser,
          setReqAnwser,
          setAudioTime,
          stopStorage,
        })
      }
      source={{html, baseUrl}}
    />
  );
};

export default WebViewDoing;

const styles = StyleSheet.create({});
