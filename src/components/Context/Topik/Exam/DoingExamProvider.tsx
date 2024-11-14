import React, {createContext, ReactNode, useRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  AnswerSelectProps,
  DoingExamType,
  listAnswerType,
} from '../../../../util/GlobalType';
import WebView from 'react-native-webview';

interface ExamContextType {
  isShowTable: boolean | null;
  setIsShowTable: React.Dispatch<React.SetStateAction<boolean | null>>;
  idxPart: number;
  setIdxPart: React.Dispatch<React.SetStateAction<number>>;
  idxQuestion: number;
  setIdxQuestion: React.Dispatch<React.SetStateAction<number>>;
  examData: DoingExamType | null;
  setExamData: React.Dispatch<React.SetStateAction<DoingExamType | null>>;
  lstQuestion: listAnswerType;
  setLstQuestion: React.Dispatch<React.SetStateAction<listAnswerType>>;
  reqAnwser: AnswerSelectProps[];
  setReqAnwser: React.Dispatch<React.SetStateAction<AnswerSelectProps[]>>;
  resAnwser: AnswerSelectProps[];
  setResAnwser: React.Dispatch<React.SetStateAction<AnswerSelectProps[]>>;
  webviewRef: React.RefObject<WebView<{}>> | null;
  audioTime: number;
  setAudioTime: React.Dispatch<React.SetStateAction<number>>;
  stopStorage: boolean;
  setStopStorage: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultValue: ExamContextType = {
  isShowTable: false,
  setIsShowTable: () => {},
  idxPart: 0,
  setIdxPart: () => {},
  idxQuestion: 0,
  setIdxQuestion: () => {},
  examData: null,
  setExamData: () => {},
  lstQuestion: [],
  setLstQuestion: () => {},
  reqAnwser: [],
  setReqAnwser: () => {},
  resAnwser: [],
  setResAnwser: () => {},
  webviewRef: null,
  audioTime: 0,
  setAudioTime: () => {},
  stopStorage: true,
  setStopStorage: () => {},
};

export const ExamContext = createContext<ExamContextType>(defaultValue);

export const DoingExamProvider = ({children}: {children: ReactNode}) => {
  const [isShowTable, setIsShowTable] = useState<boolean | null>(false);
  const [idxPart, setIdxPart] = useState(0);
  const [idxQuestion, setIdxQuestion] = useState(0);
  const [audioTime, setAudioTime] = useState(0);
  const [stopStorage, setStopStorage] = useState(true);
  const [examData, setExamData] = useState<DoingExamType | null>(null);
  const [lstQuestion, setLstQuestion] = useState<listAnswerType>([]);
  const [reqAnwser, setReqAnwser] = useState<AnswerSelectProps[]>([]);
  const [resAnwser, setResAnwser] = useState<AnswerSelectProps[]>([]);
  const webviewRef = useRef<WebView>(null);
  return (
    <ExamContext.Provider
      value={{
        isShowTable,
        setIsShowTable,
        idxPart,
        setIdxPart,
        idxQuestion,
        setIdxQuestion,
        examData,
        setExamData,
        lstQuestion,
        setLstQuestion,
        reqAnwser,
        setReqAnwser,
        resAnwser,
        setResAnwser,
        webviewRef,
        audioTime,
        setAudioTime,
        stopStorage,
        setStopStorage,
      }}>
      {children}
    </ExamContext.Provider>
  );
};

const styles = StyleSheet.create({});
