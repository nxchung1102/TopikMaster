import {Animated, Easing, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Light} from '../../../../util/Theme/ThemeGlobal';
import {formatTimeExam} from '../../../../util/topik/FormatTime';
import ModalCustom from '../Modal/ModalCustom';
import EndTimeModalContent from '../Modal/EndTimeModalContent';
import {useNavigation} from '@react-navigation/native';
import {ExamContext} from '../../../Context/Topik/Exam/DoingExamProvider';
import {getNameSectionByType} from '../../../../util/topik/getNameSectionByType';
import {storageData} from '../../../../util/topik/AsyncStorage';
interface CountDownProps {
  initialTime: number;
  slideAnim: Animated.Value;
  screenHeight: number;
  modalHeight: number;
  lengthSection: number;
}
const CountDown = (props: CountDownProps) => {
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isEndTime, setIsEndTime] = useState(false);
  const {initialTime, slideAnim, modalHeight, screenHeight, lengthSection} =
    props;
  const {examData} = useContext(ExamContext);
  const routeName = lengthSection > 1 ? 'InfoExam' : 'DetailCourse';
  const param =
    lengthSection > 1
      ? {idCourse: examData?.data.idConfig}
      : {idCourse: examData?.data.groupId};
  let typeSection = parseInt(examData?.data?.typeSection + '');
  const keyStore =
    examData?.data.groupId + '' + getNameSectionByType(typeSection);
  const navigation = useNavigation<any>();

  const openEndTime = () => {
    setIsEndTime(true);
    Animated.timing(slideAnim, {
      toValue: (screenHeight - modalHeight) / 2,
      duration: 500,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  };
  const closeEndTime = () => {
    Animated.timing(slideAnim, {
      toValue: -500,
      duration: 500,
      easing: Easing.in(Easing.cubic),
      useNativeDriver: true,
    }).start(() => setIsEndTime(false));
  };

  const handleRoute = () => {
    navigation.navigate(routeName, param);
  };
  useEffect(() => {
    setTimeRemaining(initialTime);
    if (initialTime) {
      const timer = setInterval(() => {
        setTimeRemaining(pre => (pre > 0 ? pre - 1 : 0));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [initialTime]);
  useEffect(() => {
    if (timeRemaining === 5) {
      openEndTime();
    }
    if (timeRemaining === 0) {
      storageData(keyStore, 0);
      closeEndTime();
    }
  }, [timeRemaining]);
  return (
    <>
      <ModalCustom
        animationType="none"
        content={
          <EndTimeModalContent
            slideAnim={slideAnim}
            timeRemaining={timeRemaining}
          />
        }
        onRequestClose={() => {
          setIsEndTime(false);
        }}
        visible={isEndTime}
      />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {timeRemaining > 5 ? (
          <>
            <EvilIcons name="clock" color={Light} size={25} />
            <Text style={{fontWeight: 'bold', color: Light}}>
              {formatTimeExam(timeRemaining)}
            </Text>
          </>
        ) : (
          <Text></Text>
        )}
      </View>
    </>
  );
};

export default CountDown;

const styles = StyleSheet.create({});
