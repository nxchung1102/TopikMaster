import React, {useContext} from 'react';
import {Pressable, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {DarkPink} from '../../../../util/Theme/ThemeGlobal';
import {ExamContext} from '../../../Context/Topik/Exam/DoingExamProvider';

const BtnTableQuestion = () => {
  const {isShowTable, setIsShowTable} = useContext(ExamContext);
  return (
    <Pressable
      style={{
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: DarkPink,
        alignItems: 'center',
        padding: 8,
        borderRadius: 8,
      }}
      onPress={() => {
        setIsShowTable(!isShowTable);
      }}>
      <Feather name={isShowTable ? 'x' : 'list'} size={25} color={DarkPink} />
      <Text style={{fontSize: 16, color: DarkPink}}> Danh sách câu hỏi</Text>
    </Pressable>
  );
};

export default BtnTableQuestion;
