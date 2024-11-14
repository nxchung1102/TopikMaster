import React, {useState} from 'react';
import {Animated, Easing, Pressable, StyleSheet, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Light} from '../../../../util/Theme/ThemeGlobal';
import ExitModalContent from '../Modal/ExitModalContent';
import ModalCustom from '../Modal/ModalCustom';

interface HeaderLeftProps {
  slideAnim: Animated.Value;
  screenHeight: number;
  modalHeight: number;
}

const HeaderLeft = (props: HeaderLeftProps) => {
  const {slideAnim, modalHeight, screenHeight} = props;
  const [modalExit, setModalExit] = useState(false);

  const handleCloseModal = () => {
    setModalExit(false);
  };
  const openModal = () => {
    setModalExit(true);
    Animated.timing(slideAnim, {
      toValue: (screenHeight - modalHeight) / 2,
      duration: 500,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <ModalCustom
        onRequestClose={() => {
          setModalExit(false);
        }}
        visible={modalExit}
        animationType="none"
        content={
          <ExitModalContent
            handleCloseModal={handleCloseModal}
            slideAnim={slideAnim}
            img={require('../../../../img/topikImg/modalBack.png')}
          />
        }
      />
      <Pressable
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingRight: 20,
        }}
        onPress={openModal}>
        <AntDesign name="close" color={Light} size={20} />
        <Text style={{color: Light}}>Thoát</Text>
      </Pressable>
    </>
  );
};

export default HeaderLeft;

const styles = StyleSheet.create({});
