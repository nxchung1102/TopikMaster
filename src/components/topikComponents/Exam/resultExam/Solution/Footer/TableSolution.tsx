import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  LightPink,
  DarkPink,
  Light,
  Dark,
} from '../../../../../../util/Theme/ThemeGlobal';
import {useDataResult} from '../../../../../Context/Topik/Result/ResultExamProvider';
import {getResultAnswerUser} from '../../../../../../util/topik/getResultAnswerUser';

const TableSolution = () => {
  const {
    data,
    setIdxPart,
    setIdxQuestion,
    idxPart,
    idxQuestion,
    isShow,
    setIsShow,
  } = useDataResult();
  const [idxStart, setIdxStart] = useState(0);
  const [idxEnd, setIdxEnd] = useState(0);
  const lstQuestion: any[] = data && data.questions && data?.questions;
  let currQuestion = data?.data[idxPart]?.data[idxQuestion];
  const dataAnswerUser = getResultAnswerUser(data);
  useEffect(() => {
    setIdxStart(parseInt(currQuestion?.indexStart + ''));
    setIdxEnd(parseInt(currQuestion?.indexEnd + ''));
    setIsShow(false);
  }, [data, idxQuestion, idxPart]);

  const handleSelectQuestion = (i: number) => {
    const partItem = data?.data.find((item: any) =>
      item.indexStart <= i && item.indexEnd >= i ? item : null,
    );
    if (partItem) {
      setIdxPart(partItem.partNumber - 1);
      const questionItem = partItem.data.find((item: any) =>
        item.indexStart <= i && item.indexEnd >= i ? item : null,
      );
      if (questionItem) {
        setIdxStart(questionItem.indexStart);
        setIdxEnd(questionItem.indexEnd);
        setIdxQuestion(partItem.data.indexOf(questionItem));
      } else {
        setIdxQuestion(0);
      }
    } else {
      setIdxQuestion(0);
      setIdxPart(0);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPressOut={() => {
        setIsShow(false);
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
          isShow ? {display: 'flex'} : {display: 'none'},
        ]}>
        {lstQuestion &&
          lstQuestion.map((item, i) => {
            return (
              <TouchableWithoutFeedback
                key={i}
                onPressIn={() => {
                  handleSelectQuestion(i);
                  console.log('item', item);
                }}>
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
                      paddingHorizontal: 5,
                      paddingVertical: 10,
                    }}>
                    <Text
                      style={[
                        {
                          color: Light,
                          textAlign: 'center',
                          padding: 5,
                          fontWeight: '600',
                          borderRadius: 50,
                        },
                        item.resultCheck
                          ? {backgroundColor: 'green'}
                          : {backgroundColor: 'red'},
                      ]}>
                      {!isNaN(
                        dataAnswerUser.find(
                          answ => answ.numberQuestion === item.numberQuestion,
                        )?.answer,
                      ) &&
                        dataAnswerUser.find(
                          answ => answ.numberQuestion === item.numberQuestion,
                        )?.answer + 1}
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

export default TableSolution;

const styles = StyleSheet.create({});
