import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {DarkGray} from '../../../../util/Theme/ThemeGlobal';
import {ExamContext} from '../../../Context/Topik/Exam/DoingExamProvider';

const BtnPrevious = () => {
  const {
    idxPart,
    idxQuestion,
    setIdxPart,
    setIdxQuestion,
    examData,
    setIsShowTable,
  } = useContext(ExamContext);
  const typeSection = examData?.data.typeSection;
  const handleBack = () => {
    if (idxQuestion > 0) {
      setIdxQuestion(idxQuestion - 1);
    } else if (idxQuestion === 0 && idxPart > 0) {
      const currIdxQuestion =
        examData && examData.data.parts[idxPart - 1]?.questions.length - 1;
      setIdxPart(idxPart - 1);
      setIdxQuestion(parseInt(currIdxQuestion + ''));
    }
  };

  return (
    <>
      {(idxPart == 0 && idxQuestion == 0) || typeSection === 1 ? (
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
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
          onPress={handleBack}>
          <MaterialIcons name="navigate-before" color={DarkGray} size={30} />
          <Text style={{color: DarkGray, fontSize: 16}}>Câu trước</Text>
        </Pressable>
      )}
    </>
  );
};

export default BtnPrevious;

const styles = StyleSheet.create({});
