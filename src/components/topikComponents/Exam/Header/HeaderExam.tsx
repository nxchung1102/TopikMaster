import React, {useContext, useRef} from 'react';
import {Animated, Dimensions, StyleSheet, View} from 'react-native';
import {DarkPink} from '../../../../util/Theme/ThemeGlobal';
import {ExamContext} from '../../../Context/Topik/Exam/DoingExamProvider';
import CountDown from './CountDown';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
interface HeaderExamProps {
  sectionLength: number;
}
const screenHeight = Dimensions.get('window').height;
const modalHeight = 200;
const HeaderExam = (props: HeaderExamProps) => {
  const slideAnim = useRef(new Animated.Value(-500)).current;
  const {setIsShowTable, examData, webviewRef} = useContext(ExamContext);
  const startTime = examData?.data?.startTimeSection;
  const currTime = examData?.data?.timeServer;
  const duration = examData?.data?.duration;
  const endTime = startTime && duration && startTime + duration * 60;
  const remain = endTime && currTime && endTime - currTime;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: DarkPink,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        minHeight: '2%',
      }}
      onTouchEnd={() => {
        webviewRef?.current?.postMessage('unfocusInput');
        setIsShowTable(false);
      }}>
      <HeaderLeft
        slideAnim={slideAnim}
        modalHeight={modalHeight}
        screenHeight={screenHeight}
      />
      <CountDown
        initialTime={parseInt(remain + '')}
        slideAnim={slideAnim}
        modalHeight={modalHeight}
        screenHeight={screenHeight}
        lengthSection={props.sectionLength}
      />
      <HeaderRight
        modalHeight={modalHeight}
        screenHeight={screenHeight}
        slideAnim={slideAnim}
        lengthSection={props.sectionLength}
      />
    </View>
  );
};

export default HeaderExam;

const styles = StyleSheet.create({});
