import React, {useContext, useEffect, useState} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {
  Dark,
  DarkPink,
  Light,
  LightPink,
} from '../../../../util/Theme/ThemeGlobal';
import {ExamContext} from '../../../Context/Topik/Exam/DoingExamProvider';

const TableQuestion = () => {
  const {
    isShowTable,
    setIsShowTable,
    examData,
    idxPart,
    lstQuestion,
    idxQuestion,
    setIdxPart,
    setIdxQuestion,
  } = useContext(ExamContext);
  let data = examData?.data?.parts[idxPart]?.questions[idxQuestion];
  const [idxStart, setIdxStart] = useState(0);
  const [idxEnd, setIdxEnd] = useState(0);

  useEffect(() => {
    setIdxStart(parseInt(data?.indexStart + ''));
    setIdxEnd(parseInt(data?.indexEnd + ''));
    setIsShowTable(false);
  }, [examData, idxQuestion, idxPart]);

  const handleSelectQuestion = (i: number) => {
    if (examData?.data.typeSection !== 1) {
      const partItem = examData?.data?.parts.find(item =>
        item.indexStart <= i && item.indexEnd >= i ? item : null,
      );
      if (partItem) {
        setIdxPart(partItem.partNumber - 1);
        const questionItem = partItem.questions.find(item =>
          item.indexStart <= i && item.indexEnd >= i ? item : null,
        );
        if (questionItem) {
          setIdxStart(questionItem.indexStart);
          setIdxEnd(questionItem.indexEnd);
          setIdxQuestion(partItem.questions.indexOf(questionItem));
        } else {
          setIdxQuestion(0);
        }
      } else {
        setIdxQuestion(0);
        setIdxPart(0);
      }
    }
  };

  return (
    <TouchableWithoutFeedback
      onPressOut={() => {
        setIsShowTable(false);
      }}>
      <View
        style={[
          {
            position: 'absolute',
            bottom: 0,
            flexDirection: 'row',
            flexWrap: 'wrap',
            backgroundColor: LightPink,
            padding: 30,
            alignSelf: 'center',
            alignItems: 'center',
            marginBottom: 5,
          },
          isShowTable ? {display: 'flex'} : {display: 'none'},
        ]}>
        {lstQuestion.map((item, i) => {
          return (
            <TouchableWithoutFeedback
              key={i}
              onPressIn={() => handleSelectQuestion(i)}>
              <View style={{justifyContent: 'center'}}>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: DarkPink,
                    minWidth: 40,
                  }}>
                  <Text
                    style={[
                      {
                        textAlign: 'center',
                        padding: 10,
                        fontWeight: 'bold',
                      },
                      i >= idxStart && i <= idxEnd
                        ? {color: Light, backgroundColor: DarkPink}
                        : {color: Dark},
                    ]}>
                    {i + 1}
                  </Text>
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: DarkPink,
                    backgroundColor: Light,
                    minWidth: 40,
                    paddingVertical: 10,
                  }}>
                  <Text
                    style={{
                      color: Dark,
                      textAlign: 'center',
                      padding: 10,
                      fontWeight: '600',
                    }}>
                    {item.answer !== null &&
                      item.answer !== undefined &&
                      item.answer + 1}
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TableQuestion;
