import {Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type ModalWrapperType = {
  modalExit: boolean;
  closeModalExit: () => void;
  content: React.JSX.Element;
};

const ModalWrapper: React.FC<ModalWrapperType> = ({
  modalExit,
  closeModalExit,
  content,
}: ModalWrapperType) => {
  return (
    <Modal
      transparent
      visible={modalExit}
      onRequestClose={closeModalExit}
      animationType="none">
      <View style={styles.modalBackground}>{content}</View>
    </Modal>
  );
};

export default ModalWrapper;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
  },
});
