import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

type SubmitModalContentType = {
  closeModalSubmit: () => void;
  confirmFinish: () => void;
  confirmSubmit: () => void;
  sectionLength: number;
  slideAnim: Animated.Value;
  img: any;
};

const SubmitModalContent = ({
  closeModalSubmit,
  confirmFinish,
  confirmSubmit,
  slideAnim,
  img,
  sectionLength,
}: SubmitModalContentType) => {
  return (
    <Animated.View
      style={[styles.modalContent, {transform: [{translateY: slideAnim}]}]}>
      <Image
        source={img}
        resizeMode="contain"
        style={{width: '30%', height: '30%'}}
      />
      {sectionLength > 1 ? (
        <>
          <Text style={styles.modalTitle}>Hoàn thành phần thi</Text>
          <Text style={styles.modalText}>
            Bạn chắc chắn muốn hoàn thành phần thi?
          </Text>
        </>
      ) : (
        <>
          <Text style={styles.modalTitle}> Nộp bài </Text>
          <Text style={styles.modalText}>Bạn chắc chắn muốn nộp bài?</Text>
        </>
      )}

      <View style={{flexDirection: 'row', marginTop: 40}}>
        <TouchableOpacity
          style={styles.btnCloseSubmit}
          onPress={closeModalSubmit}>
          <Text style={[styles.closeText, {color: '#FF5F7A'}]}>Ở lại</Text>
        </TouchableOpacity>
        {sectionLength > 1 ? (
          <TouchableOpacity style={styles.btnSubmit} onPress={confirmFinish}>
            <Text style={[styles.closeText, {color: '#fff'}]}>Hoàn thành</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.btnSubmit} onPress={confirmSubmit}>
            <Text style={[styles.closeText, {color: '#fff'}]}>Nộp bài</Text>
          </TouchableOpacity>
        )}
      </View>
    </Animated.View>
  );
};

export default SubmitModalContent;

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
  btnCloseSubmit: {
    backgroundColor: '#FFF2F1',
    padding: 5,
    paddingHorizontal: 25,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  btnSubmit: {
    backgroundColor: '#FF5F7A',
    padding: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 10,
  },
});
