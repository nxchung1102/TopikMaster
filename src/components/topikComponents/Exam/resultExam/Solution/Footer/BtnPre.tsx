import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {DarkGray} from '../../../../../../util/Theme/ThemeGlobal';
import {useDataResult} from '../../../../../Context/Topik/Result/ResultExamProvider';

const BtnPre = () => {
  const {data, idxPart, idxQuestion, setIdxPart, setIdxQuestion, setIsShow} =
    useDataResult();
  const handleBack = () => {
    if (idxQuestion > 0) {
      setIdxQuestion(idxQuestion - 1);
    } else if (idxQuestion === 0 && idxPart > 0) {
      const currIdxQuestion = data && data.data[idxPart - 1]?.data.length - 1;
      setIdxPart(idxPart - 1);
      setIdxQuestion(parseInt(currIdxQuestion + ''));
    }
  };
  return idxPart === 0 && idxQuestion === 0 ? (
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
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
      onPress={handleBack}>
      <MaterialIcons name="navigate-before" color={DarkGray} size={30} />
      <Text style={{color: DarkGray, fontSize: 16}}>Câu trước</Text>
    </Pressable>
  );
};

export default BtnPre;

const styles = StyleSheet.create({});
