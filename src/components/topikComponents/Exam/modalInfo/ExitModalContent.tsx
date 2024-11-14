import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

type ExitModalContentType = {
  closeModalExit: () => void;
  cancelExit: () => void;
  slideAnim: Animated.Value;
  img: any;
};

const ExitModalContent = ({
  closeModalExit,
  cancelExit,
  slideAnim,
  img,
}: ExitModalContentType) => {
  return (
    <Animated.View
      style={[styles.modalContent, {transform: [{translateY: slideAnim}]}]}>
      <Image
        source={img}
        resizeMode="contain"
        style={{width: '30%', height: '30%'}}
      />
      <Text style={styles.modalTitle}> Thoát ra ngoài </Text>
      <Text style={styles.modalText}>Câu trả lời của bạn sẽ được lưu lại.</Text>
      <Text style={styles.modalText}>Bạn chắc chắn muốn thoát ra ngoài?</Text>
      <View style={{flexDirection: 'row', marginTop: 40}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#FFF2F1',
            padding: 5,
            paddingHorizontal: 25,
            borderRadius: 20,
            marginHorizontal: 10,
          }}
          onPress={closeModalExit}>
          <Text style={[styles.closeText, {color: '#FF5F7A'}]}>Ở lại</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#FF5F7A',
            padding: 5,
            paddingHorizontal: 20,
            borderRadius: 20,
            marginHorizontal: 10,
          }}
          onPress={cancelExit}>
          <Text style={[styles.closeText, {color: '#fff'}]}>Thoát</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default ExitModalContent;

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: '15%',
    alignItems: 'center',
    height: '33.333%',
  },
  modalTitle: {
    color: '#333',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
  },
  modalText: {
    color: '#333',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
  },
  closeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
