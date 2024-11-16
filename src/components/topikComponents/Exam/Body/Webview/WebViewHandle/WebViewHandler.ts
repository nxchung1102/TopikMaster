import {WebViewMessageEvent} from 'react-native-webview';

import {
  AnswerSelectProps,
  DoingExamType,
} from '../../../../../../util/GlobalType';
import {storageData} from '../../../../../../util/topik/AsyncStorage';
import {findQuestion} from '../../../../../../util/topik/findQuestion';
import {getNameSectionByType} from '../../../../../../util/topik/getNameSectionByType';
interface WebViewHandlerProps {
  event: WebViewMessageEvent;
  examData: DoingExamType | null;
  setIdxPart: React.Dispatch<React.SetStateAction<number>>;
  setIdxQuestion: React.Dispatch<React.SetStateAction<number>>;
  idxPart: number;
  idxQuestion: number;
  reqAnwser: AnswerSelectProps[];
  setReqAnwser: React.Dispatch<React.SetStateAction<AnswerSelectProps[]>>;
  setAudioTime: React.Dispatch<React.SetStateAction<number>>;
  stopStorage: boolean;
}

export const WebViewHandler = (props: WebViewHandlerProps) => {
  const {
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
  } = props;

  let typeSection = parseInt(examData?.data?.typeSection + '');
  let questions = examData?.data?.parts[idxPart]?.questions;
  const dataJs = JSON.parse(event.nativeEvent.data);
  const answer = dataJs.answer;
  const stepId = dataJs.stepId;
  const currentQ = findQuestion(examData, idxPart, idxQuestion);
  const currentTime = dataJs.currentTime;
  const keyStore =
    examData?.data.groupId + '' + getNameSectionByType(typeSection);
  if (typeSection === 1) {
    if (stopStorage) {
      storageData(keyStore, currentQ, currentTime);
    }
    const ended = dataJs.end;
    if (ended) {
      setAudioTime(0);
      if (questions && questions.length - 1 > idxQuestion) {
        setIdxQuestion(idxQuestion + 1);
      } else if (questions && questions.length - 1 == idxQuestion) {
        setIdxPart(idxPart + 1);
        setIdxQuestion(0);
      } else {
        console.log('listen: err next question');
      }
    }
  }
  if (stepId) {
    const idx = reqAnwser.findIndex(item => item.stepId === stepId);
    if (idx !== -1) {
      setReqAnwser(pre => {
        const updateReq = [...pre];
        typeSection === 3
          ? (updateReq[idx].dataOptionText = answer)
          : (updateReq[idx].dataOptionId = [answer]);
        return updateReq;
      });
    } else {
      const newItem: AnswerSelectProps = {
        isSkip: true,
        stepId,
        studentDoRight: null,
      };
      typeSection == 3
        ? (newItem.dataOptionText = answer)
        : (newItem.dataOptionId = [answer]);
      setReqAnwser([...reqAnwser, newItem]);
    }
  }
};
