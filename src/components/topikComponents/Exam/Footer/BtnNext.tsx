import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {DarkGray} from '../../../../util/Theme/ThemeGlobal';
import {ExamContext} from '../../../Context/Topik/Exam/DoingExamProvider';

const BtnNext = () => {
  const {
    idxPart,
    idxQuestion,
    setIdxPart,
    setIdxQuestion,
    examData,
    setIsShowTable,
  } = useContext(ExamContext);
  const typeSection = examData?.data.typeSection;
  const lastIdxQuestion =
    examData && examData.data.parts[idxPart]?.questions.length - 1;
  const lastIdxPart = examData && examData.data.parts.length - 1;
  const handleNext = () => {
    if (lastIdxQuestion && idxQuestion < lastIdxQuestion) {
      setIdxQuestion(idxQuestion + 1);
    } else if (
      lastIdxPart &&
      idxQuestion == lastIdxQuestion &&
      idxPart < lastIdxPart
    ) {
      setIdxPart(idxPart + 1);
      setIdxQuestion(0);
    }
  };
  return (
    <>
      {(lastIdxPart == idxPart && lastIdxQuestion == idxQuestion) ||
      typeSection === 1 ? (
        <View
          style={{flex: 1}}
          onTouchEnd={() => {
            setIsShowTable(false);
          }}>
          <Text style={{flex: 1}}></Text>
        </View>
      ) : (
        <Pressable
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
          onPress={handleNext}>
          <Text style={{color: DarkGray, fontSize: 16}}>Câu sau</Text>
          <MaterialIcons name="navigate-next" color={DarkGray} size={30} />
        </Pressable>
      )}
    </>
  );
};

export default BtnNext;

const styles = StyleSheet.create({});
