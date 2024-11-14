import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {DarkPink, Light} from '../../../../util/Theme/ThemeGlobal';
import ModalCustom from '../Modal/ModalCustom';
import NextModalSectionContent from '../Modal/NextModalSectionContent';
import SubmitModalContent from '../Modal/SubmitModalContent';
import {ExamContext} from '../../../Context/Topik/Exam/DoingExamProvider';
interface HeaderRightProps {
  lengthSection?: number;
  slideAnim: Animated.Value;
  screenHeight: number;
  modalHeight: number;
}

const HeaderRight = (props: HeaderRightProps) => {
  const {lengthSection, modalHeight, screenHeight, slideAnim} = props;
  const [modalSubmit, setModalSubmit] = useState(false);
  const {setStopStorage} = useContext(ExamContext);
  const handleCloseModal = () => {
    setModalSubmit(false);
  };
  const openModalExit = () => {
    setModalSubmit(true);
    Animated.timing(slideAnim, {
      toValue: (screenHeight - modalHeight) / 2,
      duration: 500,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
    setStopStorage(false);
  };
  return (
    <>
      <ModalCustom
        animationType="none"
        visible={modalSubmit}
        onRequestClose={() => {
          setModalSubmit(false);
        }}
        content={
          lengthSection && lengthSection > 1 ? (
            <NextModalSectionContent
              slideAnim={slideAnim}
              handleCloseModal={handleCloseModal}
              img={require('../../../../img/topikImg/modalWarnning.png')}
            />
          ) : (
            <SubmitModalContent
              slideAnim={slideAnim}
              handleCloseModal={handleCloseModal}
              img={require('../../../../img/topikImg/plane.png')}
            />
          )
        }
      />
      {lengthSection && lengthSection > 1 ? (
        <View style={{justifyContent: 'center'}}>
          <Pressable
            style={{
              borderRadius: 25,
              backgroundColor: Light,
              paddingHorizontal: 15,
              paddingVertical: 8,
            }}
            onPress={openModalExit}>
            <Text
              style={{
                color: DarkPink,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Hoàn thành
            </Text>
          </Pressable>
        </View>
      ) : (
        <View style={{justifyContent: 'center'}}>
          <Pressable
            style={{
              borderRadius: 25,
              backgroundColor: Light,
              paddingHorizontal: 25,
              paddingVertical: 8,
            }}
            onPress={openModalExit}>
            <Text
              style={{
                color: DarkPink,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Nộp bài
            </Text>
          </Pressable>
        </View>
      )}
    </>
  );
};

export default HeaderRight;

const styles = StyleSheet.create({});
