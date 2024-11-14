import {
  Modal,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
interface ModalCustomProps {
  animationType?: 'none' | 'slide' | 'fade' | undefined;
  onRequestClose?: ((event: NativeSyntheticEvent<any>) => void) | undefined;
  visible?: boolean | undefined;
  content?: JSX.Element;
}
const ModalCustom = (props: ModalCustomProps) => {
  const {visible, animationType, onRequestClose, content} = props;
  return (
    <Modal
      visible={visible}
      onRequestClose={onRequestClose}
      transparent
      animationType={animationType}>
      {content}
    </Modal>
  );
};

export default ModalCustom;

const styles = StyleSheet.create({});
