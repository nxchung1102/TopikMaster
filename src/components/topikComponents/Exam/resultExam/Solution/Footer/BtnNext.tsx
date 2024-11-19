import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {DarkGray} from '../../../../../../util/Theme/ThemeGlobal';
import {useDataResult} from '../../../../../Context/Topik/Result/ResultExamProvider';

const BtnNext = () => {
  const {data, idxPart, idxQuestion, setIdxPart, setIdxQuestion, setIsShow} =
    useDataResult();
  const lastIdxQuestion = data && data.data[idxPart]?.data.length - 1;
  const lastIdxPart = data && data.data.length - 1;
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
  return lastIdxQuestion === idxQuestion && lastIdxPart === idxPart ? (
    <View
      style={{flex: 1}}
      onTouchEnd={() => {
        setIsShow(false);
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
  );
};

export default BtnNext;

const styles = StyleSheet.create({});
